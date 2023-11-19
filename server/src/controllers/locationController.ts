import { Request, Response } from 'express';
import LocationNetworkQuality from '../models/locationNetworkQualityModel';

export const postLocation = async (req: Request, res: Response) => {
  try {
    const { latitude, longitude, rtt, downlink, network } = req.body;
    const locationNetworkQuality = await LocationNetworkQuality.create({ latitude, longitude, rtt, downlink, network });

    res.status(201).json(locationNetworkQuality);
  } catch (error) {
    const errorMessage = error;
    if(typeof errorMessage === "object") {
      
    }
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

