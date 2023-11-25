import NetworkQualitySummary from '../models/NetworkQualitySummaryModel';
import { Request, Response } from 'express';

export const getNetworkQualityAverages = async (req: Request, res: Response) => {
  try {
    const { city } = req.params;
    // Asumiendo que tienes una columna 'city' en tu modelo NetworkQualitySummary
    const networkSummary = await NetworkQualitySummary.findOne({
      where: { city }
    });

    if (!networkSummary) {
      return res.status(404).json({ message: 'Network quality summary not found for the specified city.' });
    }

    res.json(networkSummary);
  } catch (error) {
    console.error('Error fetching network quality summary:', error);
    res.status(500).json({ error: error.message });
  }
};