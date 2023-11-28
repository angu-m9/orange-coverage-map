import { Request, Response } from 'express';
import LocationNetworkQuality from '../models/locationNetworkQualityModel';
import { getProvinceFromPostalCode } from '../services/geolocation';

export const getCoverageMap = async (req: Request, res: Response) => {
    try {
        const averageQualities = await LocationNetworkQuality.findAll({
        attributes: [
            [sequelize.fn('AVG', sequelize.col('rtt')), 'averageRTT'],
            [sequelize.fn('AVG', sequelize.col('downlink')), 'averageDownlink'],
            [sequelize.fn('LEFT', sequelize.col('postal_code'), 2), 'provinceCode'],
        ],
        group: ['provinceCode'],
        });

        // Convierte los códigos postales en provincias
        const result = await Promise.all(
        averageQualities.map(async (data) => {
            const provinceCode = data.dataValues.provinceCode;
            const province = getProvinceFromPostalCode(provinceCode);
            return {
            province,
            averageRTT: data.dataValues.averageRTT,
            averageDownlink: data.dataValues.averageDownlink,
            };
        })
        );

        // `result` ahora contiene el promedio de calidad por provincia
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};

