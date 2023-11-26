// models/NetworkQualityMode.ts
import { DataTypes } from 'sequelize';
import sequelize from '../data/db';

const NetworkQualityMode = sequelize.define('NetworkQualityMode', {
  mode_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  most_common_network: {
    type: DataTypes.CHAR(8),
    allowNull: false
  },
  frequency: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'NetworkQualityMode',
  timestamps: false
});

export default NetworkQualityMode;
