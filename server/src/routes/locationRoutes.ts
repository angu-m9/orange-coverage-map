// import express from 'express';
// import { postLocation } from '../controllers/locationController';

// const locationRouter = express.Router();

// locationRouter.post('/', postLocation);

// export default locationRouter;
// locationRoutes.ts

import express from 'express';
import { postLocation } from '../controllers/locationController';
import { getLocations } from '../controllers/locationController';
const locationRouter = express.Router();

locationRouter.post('/network-quality', postLocation); 
locationRouter.get('/data-list', getLocations);

export default locationRouter;
