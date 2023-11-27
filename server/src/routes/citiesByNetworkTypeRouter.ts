import { Router } from 'express';
import { getCitiesByNetworkType } from '../controllers/CitiesByNetworkTypeController';
import { verifyAdminToken } from '../middlewares/verifyAdminToken';

const citiesByNetworkTypeRouter = Router();

citiesByNetworkTypeRouter.get('/cities/:networkType',verifyAdminToken, getCitiesByNetworkType);

export default citiesByNetworkTypeRouter;
