import {  DataTypes } from 'sequelize';
import sequelize from '../data/db';

const Admin = sequelize.define('Admin', {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'Admin',
    timestamps: false
  });
  
  export default Admin;
  