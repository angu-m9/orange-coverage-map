import bcrypt from 'bcrypt';
import AdminModel from '../models/adminModel';
import db from '../data/db';
import dotenv from 'dotenv';
dotenv.config();

const saltRounds = 10;

const setupAdmin = async () => {
  try {
    await db.authenticate(); 
    console.log('Connection has been established successfully.');
    
    await db.sync(); 
    console.log('DB Synced successfully.');

    const adminUsername = process.env.DB_NAME_ADMIN;
    const adminPassword = process.env.DB_PASSWORD_ADMIN;

    const existingAdmin = await AdminModel.findOne({ where: { admin_username: adminUsername } });
    if (existingAdmin) {
      console.log(`Admin user ${adminUsername} already exists`);
      return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    const admin = await AdminModel.create({
      admin_username: adminUsername,
      admin_password: hashedPassword
    });

    console.log('Admin user created successfully:', admin.toJSON());
  } catch (error) {
    console.error('Failed to create admin user:', error);
  } finally {
    await db.close();
  }
};

setupAdmin();
