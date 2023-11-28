import express from 'express';
import { getCompanies } from '../controllers/companyController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { companySchema } from '../middlewares/companyValidationMiddleware';

const companiesRouter = express.Router();


companiesRouter.get('/companies', getCompanies);

export default companiesRouter;