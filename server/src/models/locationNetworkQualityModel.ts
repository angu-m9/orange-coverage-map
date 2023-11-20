// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../data/db';

// class LocationNetworkQuality extends Model {}

// LocationNetworkQuality.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   network: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   }, 
//   latitude: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   longitude: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   rtt: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   downlink: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   }
// }, {
//   sequelize,
//   modelName: 'LocationNetworkQuality',
//   tableName: 'location_network_quality',
//   timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
// });

// export default LocationNetworkQuality;


import { Model, DataTypes } from 'sequelize';
import sequelize from '../data/db';
const LocationNetworkQuality = sequelize.define('LocationNetworkQuality', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'user_id'
    }
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

