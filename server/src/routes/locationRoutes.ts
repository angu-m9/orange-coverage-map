import express from 'express';
import { postLocation } from '../controllers/locationController';
import { getLocations } from '../controllers/locationController';
import { verifyAdminToken } from '../middlewares/verifyAdminToken';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { locationDataSchema } from '../middlewares/locationValidationMiddleware';
const locationRouter = express.Router();

locationRouter.post('/network-quality',validationMiddleware(locationDataSchema), postLocation); 
locationRouter.get('/data-list',verifyAdminToken, getLocations);

export default locationRouter;
