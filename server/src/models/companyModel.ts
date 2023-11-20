import { Model, DataTypes } from 'sequelize';
import sequelize from '../data/db';

const Company = sequelize.define('Company', {
    company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'Company',
    timestamps: false
});

export default Company;
