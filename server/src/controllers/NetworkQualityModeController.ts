// NetworkQualityModeController.ts
import { Request, Response } from 'express';
import LocationNetworkQuality from '../models/locationNetworkQualityModel';
import NetworkQualityMode from '../models/networkQualityModeModel'; 
import NetworkModeMapEntry from '../interfaces/NetworkQualityModeInterface';
import db from '../data/db'; 



export const calculateNetworkMode = async (req: Request, res: Response) => {
  try {
    // Calcula la moda para cada ciudad
    const networkModes = await LocationNetworkQuality.findAll({
      attributes: [
        'city',
        'network',
        [db.fn('COUNT', db.col('network')), 'frequency']
      ],
      group: ['city', 'network'],
      order: [
        ['city', 'ASC'],
        [db.literal('frequency'), 'DESC']
      ],
    });

    // Transforma los resultados en un formato más útil
    const modeMap: Record<string, NetworkModeMapEntry> = {};
    networkModes.forEach((mode) => {
      const city = mode.getDataValue('city');
      const most_common_network = mode.getDataValue('network');
      const frequency = mode.getDataValue('frequency');

      // Solo toma el más común si aún no se ha tomado uno para la ciudad
      if (!modeMap[city]) {
        modeMap[city] = { most_common_network, frequency };
      }
    });

    console.log('Network mode map to send:', modeMap);

    // Inserta o actualiza los datos en la tabla NetworkQualityMode
 // Inserta o actualiza los datos en la tabla NetworkQualityMode
for (const [city, { most_common_network, frequency }] of Object.entries(modeMap)) {
  // Verifica si la entrada ya existe para la ciudad
  const existingMode = await NetworkQualityMode.findOne({ where: { city } });

  if (existingMode) {
    // Actualiza si ya existe
    await existingMode.update({ most_common_network, frequency });
  } else {
    // Crea una nueva entrada si no existe
    await NetworkQualityMode.create({ city, most_common_network, frequency });
  }
}

    // Envía los modos calculados como respuesta.
    res.json(modeMap);
  } catch (error) {
    console.error('Error al calcular el modo de la red:', error);
    res.status(500).send((error as Error).message);
  }
};
