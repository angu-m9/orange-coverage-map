import React, { useState } from 'react';
import HeaderAdmin from '../../templates/HeaderAdmin/HeaderAdmin';
import HeatMap from '../../templates/HeatMap/HeatMap';
import { services } from '../../../services/services';
import './mapCoverage.style.css';

const MapCoverage = (): React.JSX.Element => {
  // Estado para almacenar las ciudades filtradas
  const [filteredCities, setFilteredCities] = useState([]);
  // Estado para almacenar el tipo de red activo seleccionado
  const [activeNetworkType, setActiveNetworkType] = useState(null);

  // Función para obtener las ciudades filtradas por tipo de red
  const handleNetworkTypeFilter = async (networkType) => {
    try {
      const cities = await services.getCitiesByNetworkType(networkType);
      console.log('Ciudades Filtradas:', cities);
      console.log('Ciudades Filtradas desde el Servicio:', cities);
      // Actualizar el estado con las ciudades filtradas
      setFilteredCities(cities);
    } catch (error) {
      console.error('Error al obtener ciudades por tipo de red:', error);
      // Limpiar el estado si hay un error
      setFilteredCities([]);
    }
  };

  // Función para manejar el cambio en el tipo de red seleccionado
  const handleNetworkTypeToggle = (networkType) => {
    // Si el tipo de red ya está activo, desactivarlo y limpiar las ciudades filtradas
    if (activeNetworkType === networkType) {
      setActiveNetworkType(null);
      setFilteredCities([]);
    } else {
      // Activar el nuevo tipo de red y filtrar las ciudades
      setActiveNetworkType(networkType);
      handleNetworkTypeFilter(networkType);
    }
  };

  // JSX del componente
  return (
    <>
      <HeaderAdmin mapCoverage={'active'} dataList={''} />
      <div className='black'>
        <div className='container py-4 px-3 mx-auto container__map'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-items-center flex-column'>
              {/* Pasar las ciudades filtradas al HeatMap */}
              <HeatMap filteredCities={filteredCities} />
            </div>
            <div className='col-12 d-flex justify-content-center align-content-center flex-wrap gap-2 mt-3'>
              {/* Botones para filtrar por tipo de red */}
              <button onClick={() => handleNetworkTypeToggle('4g')} className='btn rounded' id='button4g'>
                4G <img src='src/assets/icons/4g.svg' alt='button4g' />
              </button>
              <button onClick={() => handleNetworkTypeToggle('3g')} className='btn rounded' id='button3g'>
                3G <img src='src/assets/icons/3g.svg' alt='button3g' />
              </button>
              <button onClick={() => handleNetworkTypeToggle('2g')} className='btn rounded' id='button2g'>
                2G <img src='src/assets/icons/2g.svg' alt='button2g' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
};

export default MapCoverage;

