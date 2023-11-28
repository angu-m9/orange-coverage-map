import db from '../data/db';
import { Model, DataTypes } from 'sequelize';

export interface AdminSessionAttributes {
  session_id: number;
  admin_id: number;
  token: string;
  created_at: Date;
  expires_at?: Date | null;
}


interface AdminSessionInstance extends Model<AdminSessionAttributes>, AdminSessionAttributes {}

const AdminSessionModel = db.define<AdminSessionInstance>('AdminSession', {
  session_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  admin_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Admins',
      key: 'admin_id',
    },
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  expires_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'AdminSession',
  timestamps: false,
});

export default AdminSessionModel;
