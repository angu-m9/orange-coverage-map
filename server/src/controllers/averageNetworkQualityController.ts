// controllers/averageNetworkQualityController.ts
import LocationNetworkQuality from '../models/locationNetworkQualityModel';
import NetworkQualitySummary from '../models/networkQualitySumaryModel';
import Sequelize from 'sequelize';

export const updateNetworkQualitySummary = async () => {
  try {
    const summaries = await LocationNetworkQuality.findAll({
      attributes: [
        'city',
        'network',
        [Sequelize.fn('AVG', Sequelize.col('rtt')), 'avg_rtt'],
        [Sequelize.fn('AVG', Sequelize.col('downlink')), 'avg_downlink']
      ],
      group: ['city', 'network']
    });

    for (const summary of summaries) {
      const networkType = summary.network.toLowerCase();
      await NetworkQualitySummary.upsert({
        city: summary.city,
        [`avg_rtt_${networkType}`]: summary.getDataValue('avg_rtt'),
        [`avg_downlink_${networkType}`]: summary.getDataValue('avg_downlink')
        // Aquí podrías actualizar también `total_measurements` y `last_updated` según tu lógica de negocios
      });
    }
  } catch (error) {
    console.error('Error en updateNetworkQualitySummary:', error);
    throw error; // O manejo de errores según tus necesidades
  }
};
