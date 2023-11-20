"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../data/db"));
class LocationNetworkQuality extends sequelize_1.Model {
}
LocationNetworkQuality.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    network: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    rtt: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    downlink: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    modelName: 'LocationNetworkQuality',
    tableName: 'location_network_quality',
    timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
});
exports.default = LocationNetworkQuality;
//# sourceMappingURL=locationNetworkQualityModel.js.map