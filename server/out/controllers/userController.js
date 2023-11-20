"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.checkUser = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_name, user_lastname, cellular_carrier, postal_code } = req.body;
        const user = yield userModel_1.default.create({ user_name, user_lastname, cellular_carrier, postal_code });
        console.log('User created with ID:', user.id);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createUser = createUser;
const checkUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.cookies['userId'];
        if (!userId) {
            // Si no hay cookie 'userId', se asume que es un nuevo usuario
            return res.status(200).json({ exists: false });
        }
        const user = yield userModel_1.default.findByPk(userId);
        res.status(200).json({ exists: !!user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.checkUser = checkUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield userModel_1.default.findByPk(userId);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { name, last_name, postal_code, cellular_carrier } = req.body;
        const [rowsUpdated, updatedUsers] = yield userModel_1.default.update({ name, last_name, postal_code, cellular_carrier }, {
            where: { id: userId },
            returning: true, // Return the updated records
        });
        if (rowsUpdated > 0) {
            res.status(200).json(updatedUsers[0]);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const rowsDeleted = yield userModel_1.default.destroy({
            where: { id: userId },
        });
        if (rowsDeleted > 0) {
            res.status(204).send(); // 204 No Content
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map