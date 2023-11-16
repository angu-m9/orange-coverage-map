import { Model, DataTypes } from 'sequelize';
import sequelize from '../data/db';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_names: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cellular_carrier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }, 
  cookie: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true, // Ensure cookies are unique
  },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
  });
  
  export default User;
