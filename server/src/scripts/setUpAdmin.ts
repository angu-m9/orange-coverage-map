import bcrypt from 'bcrypt';
import AdminModel from '../models/adminModel';
import db from '../data/db';

const saltRounds = 10;

const setupAdmin = async () => {
  try {
    await db.authenticate(); // Verifica la conexión a la base de datos
    console.log('Connection has been established successfully.');
    
    await db.sync(); // Sincroniza el modelo con la base de datos
    console.log('DB Synced successfully.');

    const adminUsername = 'jlmontesinos';
    const adminPassword = 'J0urn3y{:)}.1';

    // Verifica si el usuario ya existe
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
