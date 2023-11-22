import { DataTypes } from 'sequelize';
import db from '../data/db';

const AdminSessionModel = db.define('AdminSession', {
  session_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  admin_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Admins', // Referencia a la tabla Admins
      key: 'admin_id',
    }
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  expires_at: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'AdminSession',
  timestamps: false
});

export default AdminSessionModel;
