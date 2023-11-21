// import express from 'express';
// import { postLocation } from '../controllers/locationController';

// const router = express.Router();

// router.post('/', postLocation);

// export default router;
// locationRoutes.ts

import express from 'express';
import { postLocation } from '../controllers/locationController';
import { getLocations } from '../controllers/locationController';
const router = express.Router();

router.post('/network-quality', postLocation); 
router.get('/data-list', getLocations);

export default router;
