import { DataTypes } from 'sequelize';
import db from '../data/db';

const AdminModel = db.define('Admin', {
  admin_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  admin_username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  admin_password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'Admins',
  timestamps: false
});

export default AdminModel;
