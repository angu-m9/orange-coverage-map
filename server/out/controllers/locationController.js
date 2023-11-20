"use strict";
// import { Request, Response } from 'express';
// import Location from '../models/locationModel';
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
exports.getLocations = exports.postLocation = void 0;
const locationNetworkQualityModel_1 = __importDefault(require("../models/locationNetworkQualityModel"));
const postLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { latitude, longitude, rtt, downlink, network } = req.body;
        const locationNetworkQuality = yield locationNetworkQualityModel_1.default.create({ latitude, longitude, rtt, downlink, network });
        res.status(201).json(locationNetworkQuality);
    }
    catch (error) {
        const errorMessage = error;
        if (typeof errorMessage === "object") {
        }
        res.status(500).json({ error: error.message });
    }
});
exports.postLocation = postLocation;
const getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield locationNetworkQualityModel_1.default.findAll();
        res.status(200).json(locations);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getLocations = getLocations;
//# sourceMappingURL=locationController.js.map