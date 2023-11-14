// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../data/db';

// class Location extends Model {}

// Location.init({
//   location_id: {
//     type: DataTypes.BLOB(16),
//     primaryKey: true,
//     defaultValue: DataTypes.UUIDV4,
//   },
//   user_id: {
//     type: DataTypes.BLOB(16),
//     allowNull: false,
//   },
//   latitude: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   longitude: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   fecha: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
//   network_id: {
//     type: DataTypes.BLOB(16),
//     allowNull: false,
//   },
//   company_id: {
//     type: DataTypes.BLOB(16),
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   modelName: 'Location',
// });

// export default Location;

// locationNetworkQualityModel.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../data/db';

class LocationNetworkQuality extends Model {}

LocationNetworkQuality.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  rtt: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  downlink: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
   created_at: {
     type: DataTypes.DATE,
     defaultValue: DataTypes.NOW,
   },
}, {
  sequelize,
  modelName: 'LocationNetworkQuality',
  tableName: 'location_network_quality',
  timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
});

export default LocationNetworkQuality;
