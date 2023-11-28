import { Request, Response } from 'express';
import NetworkQualityMode from '../models/networkQualityModeModel';

export const getCitiesByNetworkType = async (req: Request, res: Response) => {
  try {
    const networkType = req.params.networkType;
    const cities = await NetworkQualityMode.findAll({
      where: { most_common_network: networkType },
      attributes: ['city']
    });

    res.json(cities);
  } catch (error) {
    console.error('Error al obtener ciudades por tipo de red:', error);
    res.status(500).send(error.message);
  }
};
