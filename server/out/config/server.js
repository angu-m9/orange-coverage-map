"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const locationRoutes_1 = __importDefault(require("../routes/locationRoutes"));
const cors_1 = __importDefault(require("cors"));
const registerRoutes_1 = __importDefault(require("../routes/registerRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', registerRoutes_1.default);
app.use('/', locationRoutes_1.default);
app.listen(5000, () => {
    console.log('Servidor ejecutándose en http://localhost:5000');
});
//# sourceMappingURL=server.js.map