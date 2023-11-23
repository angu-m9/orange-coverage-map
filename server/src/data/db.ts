import { Sequelize } from 'sequelize';
import 'dotenv/config';

const db = new Sequelize(
    process.env.DB_NAME || 'default_db_name',
    process.env.DB_USER || 'default_user',
    process.env.DB_PASSWORD || 'default_password',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT as any || 'mysql',
    }
);

export default db;