import express from 'express';
import { postLocation } from '../controllers/locationController';
import { getLocations } from '../controllers/locationController';
import { verifyAdminToken } from '../middlewares/verifyAdminToken';
const locationRouter = express.Router();

locationRouter.post('/network-quality' ,postLocation); 

locationRouter.get('/data-list',verifyAdminToken, getLocations);

export default locationRouter;
