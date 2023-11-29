import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/adminModel';
import AdminSessionModel from '../models/adminSessionModel'; 
import { tokenSecret, tokenExpiration } from '../config/app';
import  parseTokenExpiration from '../utils/tokenHelpers'; 


const login = async (req: Request, res: Response) => {
  console.log('Received login request with body:', req.body);

  const { admin_username, admin_password } = req.body;
  console.log(`Attempting to find admin with username: ${admin_username}`);

  try {
    const admin = await AdminModel.findOne({ where: { admin_username } });
    console.log('Admin search complete:', admin);

    if (!admin) {
      console.log('Login failed: No admin found with username', admin_username);
      return res.status(401).json({ message: 'Invalid Username or Password' });
    }

    console.log(`Comparing password for admin: ${admin_username}`);
      const isPasswordValid = await bcrypt.compare(admin_password, admin.get('admin_password') as string);      

    if (!isPasswordValid) {
      console.log('Login failed: Password invalid for username', admin_username);
      return res.status(401).json({ message: 'Invalid Username or Password' });
    }

    const tokenExpirationMilliseconds = parseTokenExpiration(tokenExpiration);
    const expirationDate = tokenExpirationMilliseconds
      ? new Date(Date.now() + tokenExpirationMilliseconds)
      : new Date(Date.now() + 3600000); 

    console.log(`Password valid for admin: ${admin_username}, generating token.`);
    const token = jwt.sign({ adminId: admin.get('admin_id') }, tokenSecret, { expiresIn: tokenExpiration });
    

    const [session, created] = await AdminSessionModel.findOrCreate({
      where: { admin_id: admin.get('admin_id') as number},
      defaults: {
        admin_id: admin.get('admin_id') as number,
        token: token,

        expires_at: expirationDate
      }
    });

    if (!created) {
      session.token = token;
      session.expires_at = expirationDate;
      await session.save();
    }

    console.log('Login successful, token generated for admin_id:', admin.get('admin_id'));
    return res.json({ token, expires_at: expirationDate }); // Devuelve también la fecha de expiración si es necesario
  } catch (error) {
    console.error('Error in login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default {
  login
};
