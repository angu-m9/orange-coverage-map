"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../data/db"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => (0, uuid_1.v4)(), //will create an UUID
    },
    user_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cellular_carrier: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    postal_code: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    modelName: 'User',
    tableName: 'users',
    timestamps: false // Suponiendo que no estamos usando campos de timestamp como createdAt o updatedAt
});
exports.default = User;
//# sourceMappingURL=userModel.js.map