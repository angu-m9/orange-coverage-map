// models/NetworkQualitySummary.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../data/db'
class NetworkQualitySummary extends Model {}

NetworkQualitySummary.init({
  summary_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avg_rtt_2g: DataTypes.FLOAT,
  avg_downlink_2g: DataTypes.FLOAT,
  avg_rtt_3g: DataTypes.FLOAT,
  avg_downlink_3g: DataTypes.FLOAT,
  avg_rtt_4g: DataTypes.FLOAT,
  avg_downlink_4g: DataTypes.FLOAT,
  total_measurements: DataTypes.INTEGER,
  last_updated: DataTypes.DATE
}, {
  sequelize,
  modelName: 'NetworkQualitySummary'
});

export default NetworkQualitySummary;
