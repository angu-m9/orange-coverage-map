// import { Request, Response } from 'express';
// import Location from '../models/locationModel';

// export const postLocation = async (req: Request, res: Response) => {
//   try {
//     const { latitude, longitude } = req.body;
//     // Aquí se debería incluir la lógica para determinar el network_id y company_id
//     const location = await Location.create({ latitude, longitude, /* otros campos */ });
//     res.status(201).json(location);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// locationController.ts

import { Request, Response } from 'express';
import LocationNetworkQuality from '../models/locationNetworkQualityModel';

export const postLocation = async (req: Request, res: Response) => {
  try {
    const { latitude, longitude, rtt, downlink } = req.body;
    const locationNetworkQuality = await LocationNetworkQuality.create({ latitude, longitude, rtt, downlink });
    res.status(201).json(locationNetworkQuality);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await LocationNetworkQuality.findAll();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

