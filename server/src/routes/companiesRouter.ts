/*import express from 'express';
import { getCompanies } from '../controllers/companyController';

const companiesRouter = express.Router();


companiesRouter.get('/companies', getCompanies);

export default companiesRouter;*/

// src/routes/companyRoutes.ts

import express from 'express';
import { getCompanies } from '../controllers/companyController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { companySchema } from '../middlewares/companyValidationMiddleware';

const companiesRouter = express.Router();

companiesRouter.post('/getCompanies', validationMiddleware(companySchema), getCompanies);

export default companiesRouter;
