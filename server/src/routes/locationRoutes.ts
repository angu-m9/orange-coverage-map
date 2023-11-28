// import express from 'express';
// import { postLocation } from '../controllers/locationController';

// const locationRouter = express.Router();

// locationRouter.post('/', postLocation);

// export default locationRouter;

// locationRoutes.ts
/*import express from 'express';
import { postLocation } from '../controllers/locationController';
import { getLocations } from '../controllers/locationController';
import { verifyAdminToken } from '../middlewares/verifyAdminToken';
const locationRouter = express.Router();

locationRouter.post('/network-quality', postLocation); 
locationRouter.get('/data-list',verifyAdminToken, getLocations);

export default locationRouter;*/

// src/routes/locationRoutes.ts

import express from 'express';
import { postLocation } from '../controllers/locationController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { locationDataSchema } from '../middlewares/locationValidationMiddleware';

const locationRouter = express.Router();

locationRouter.post('/postLocation', validationMiddleware(locationDataSchema), postLocation);

export default locationRouter;

