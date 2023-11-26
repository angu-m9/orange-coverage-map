import React, { useState } from "react"; // Asegúrate de importar useState
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import HeatMap from "../../templates/HeatMap/HeatMap";
import { services } from '../../../services/services'; // Importa services
import "./mapCoverage.style.css";

const MapCoverage = (): React.JSX.Element => {
  const [filteredCities, setFilteredCities] = useState([]); // Estado para almacenar las ciudades filtradas

  const handleNetworkTypeFilter = async (networkType) => {
    try {
      const cities = await services.getCitiesByNetworkType(networkType); // Llama al servicio
      setFilteredCities(cities); // Actualiza el estado con los resultados
    } catch (error) {
      console.error('Error al obtener ciudades por tipo de red:', error);
      setFilteredCities([]); // Asegúrate de resetear el estado si hay un error
    }
  };

  return (
    <>
      <HeaderAdmin mapCoverage={"active"} dataList={""} />

      <div className="black">
        <div className="container py-4 px-3 mx-auto container__map">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column">
              <HeatMap filteredCities={filteredCities} />
            </div>
            <div className="col-12 d-flex justify-content-center align-content-center flex-wrap gap-2 mt-3">
              <button onClick={() => handleNetworkTypeFilter('4g')} className="btn rounded" id="button4g">
                4G
                <img src="src/assets/icons/4g.svg" alt="button4g" />
              </button>

              <button onClick={() => handleNetworkTypeFilter('3g')} className="btn rounded" id="button3g">
                3G
                <img src="src/assets/icons/3g.svg" alt="button3g" />
              </button>

              <button onClick={() => handleNetworkTypeFilter('2g')} className="btn rounded" id="button2g">
                2G
                <img src="src/assets/icons/2g.svg" alt="button2g" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapCoverage;

