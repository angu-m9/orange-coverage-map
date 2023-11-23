import express from 'express';
import { getCompanies } from '../controllers/companyController';

const companiesRouter = express.Router();


companiesRouter.get('/companies', getCompanies);

export default companiesRouter;