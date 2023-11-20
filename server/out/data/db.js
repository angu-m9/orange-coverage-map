"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const db = new sequelize_1.Sequelize(process.env.DB_NAME || 'default_db_name', process.env.DB_USER || 'default_user', process.env.DB_PASSWORD || 'default_password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql'
});
exports.default = db;
//# sourceMappingURL=db.js.map