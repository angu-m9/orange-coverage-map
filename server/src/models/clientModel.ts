import { Model, DataTypes } from 'sequelize';
import sequelize from '../data/db';

class Client extends Model {}

Client.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
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
}, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
    timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
  });
  
  export default Client;
