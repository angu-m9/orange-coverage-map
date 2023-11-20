"use strict";
// import express from 'express';
// import { postLocation } from '../controllers/locationController';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const locationRouter = express.Router();
// locationRouter.post('/', postLocation);
// export default locationRouter;
// locationRoutes.ts
const express_1 = __importDefault(require("express"));
const locationController_1 = require("../controllers/locationController");
const locationController_2 = require("../controllers/locationController");
const locationRouter = express_1.default.Router();
locationRouter.post('/network-quality', locationController_1.postLocation);
locationRouter.get('/data-list', locationController_2.getLocations);
exports.default = locationRouter;
//# sourceMappingURL=locationRoutes.js.map