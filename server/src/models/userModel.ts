import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../data/db';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4(),  //will create an UUID
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cellular_carrier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }, 
  },
{
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
  });
  
  export default User;
