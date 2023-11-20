"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones necesarias
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const registerRouter = express_1.default.Router();
registerRouter.post('/register', userController_1.createUser);
exports.default = registerRouter;
//# sourceMappingURL=registerRoutes.js.map