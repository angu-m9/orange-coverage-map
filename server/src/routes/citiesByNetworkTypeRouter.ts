import { Router } from 'express';
import { getCitiesByNetworkType } from '../controllers/CitiesByNetworkTypeController';

const citiesByNetworkTypeRouter = Router();

citiesByNetworkTypeRouter.get('/cities/:networkType', getCitiesByNetworkType);

export default citiesByNetworkTypeRouter;
