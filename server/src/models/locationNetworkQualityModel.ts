import { DataTypes } from 'sequelize';
import sequelize from '../data/db';

const LocationNetworkQuality = sequelize.define('LocationNetworkQuality', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_uuid: { // Cambiado de user_id a user_uuid
    type: DataTypes.STRING,
    references: {
      model: 'Users', // Asegúrate de que esto coincida con tu modelo de usuario
      key: 'uuid' // El campo uuid de la tabla Users
    }
  },
  network: {
    type: DataTypes.CHAR(8),
    allowNull: false
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  rtt: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  downlink: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, {
  tableName: 'LocationNetworkQuality',
  timestamps: false
});

export default LocationNetworkQuality;
