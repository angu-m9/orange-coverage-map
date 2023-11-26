// networkRoutes.ts
import { Router } from 'express';
import { calculateNetworkMode } from '../controllers/NetworkQualityModeController';

const networkModeRouter = Router();

// Endpoint para obtener la moda de tipos de red por ciudad
networkModeRouter.get('/network-type-mode/:city', calculateNetworkMode);

export default networkModeRouter;