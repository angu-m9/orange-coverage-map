import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config/server';
import AdminModel from '../models/adminModel';

export const verifyAdminToken = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) return res.status(401).json({ message: 'Authorization token not provided' });

  // const token = authHeader.split(' ')[1];
  // console.log(token);
  // if (!token) return res.status(403).json({ message: 'Authorization token not provided' });

  try {
    const decoded = jwt.verify(authHeader, tokenSecret) as jwt.JwtPayload;
    const admin = await AdminModel.findByPk(decoded.adminId);
    if (!admin) return res.status(403).json({ message: 'Invalid token or admin not found' });

    req.admin = admin; // Agrega el administrador a la solicitud
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
