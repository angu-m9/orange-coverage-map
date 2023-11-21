import {  DataTypes } from 'sequelize';
import sequelize from '../data/db';

const AdminSession = sequelize.define('AdminSession', {
    session_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Admin',
        key: 'admin_id'
      }
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    expires_at: {
      type: DataTypes.DATE
    },
  }, {
    tableName: 'AdminSession',
    timestamps: false
  });
  
  export default AdminSession;
  