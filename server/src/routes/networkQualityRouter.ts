import { Router } from 'express';
import { getNetworkQualityAverages } from '../controllers/networkQualitySummaryController';

const router = Router();

// Obtener las medias de calidad de red para una ciudad
router.get('/network-quality-averages/:city', getNetworkQualityAverages);

export default router;