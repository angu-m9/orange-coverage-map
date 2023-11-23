/*import express from 'express';
import { getCompanies } from '../controllers/companyController';

const companiesRouter = express.Router();


companiesRouter.get('/companies', getCompanies);

export default companiesRouter;*/

// src/routes/companyRoutes.ts

import express from 'express';
import { createCompany } from '../controllers/companyController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { companySchema } from '../middlewares/companyValidationMiddleware';

const companyRouter = express.Router();

companyRouter.post('/createCompany', validationMiddleware(companySchema), createCompany);

export default companyRouter;
