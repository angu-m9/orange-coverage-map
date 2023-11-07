"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5005;
app.get('/', (_req, res) => {
    res.send('servidor creado');
});
app.listen(port, () => {
    console.log(`servidor funcionando en el puerto http://localhost:${port}`);
});
