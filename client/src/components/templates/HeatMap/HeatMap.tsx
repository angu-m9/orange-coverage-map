import { useState, useEffect } from 'react';
import { GoogleMap, Polygon, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { services } from '../../../services/services';

const libraries = ['visualization'];

const HeatMap = ({ filteredCities }) => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const geoJsonPath = import.meta.env.VITE_GEOJSON_PATH;
  const containerStyle = { width: '100%', height: '550px' };
  const spainCenter = { lat: 40.4637, lng: -3.7492 };

  const [provincesData, setProvincesData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [networkModeInfo, setNetworkModeInfo] = useState({});
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      loadGeoJsonData();
    }
  }, [isLoaded]);

  const loadGeoJsonData = async () => {
    try {
      const response = await fetch(geoJsonPath);
      console.log('GeoJSON data loaded:', provincesData);
      const data = await response.json();
      setProvincesData(data.features);
    } catch (error) {
      console.error('Error fetching GeoJSON:', error);
    }
  };

  const handlePolygonClick = async (item) => {
    const itemName = item.properties.texto; // o 'provincia' o el nombre correcto de la propiedad
    if (!itemName) {
      console.error('El nombre de la provincia no está definido.');
      return;
    }
    try {
      const modeInfo = await services.getNetworkModeByCity(itemName);
      setNetworkModeInfo(prevInfo => ({
        ...prevInfo,
        [itemName]: modeInfo[itemName], // Asegúrate de que modeInfo[itemName] es la estructura correcta
      }));
    } catch (error) {
      console.error('Error fetching network mode by item:', error);
    }
  };


  useEffect(() => {
    const fetchNetworkModeInfo = async () => {
      const networkInfo = {};
      for (const city of filteredCities) {
        try {
          const response = await services.getNetworkModeByCity(city.cityName);
          networkInfo[city.cityName] = response;
        } catch (error) {
          console.error('Error fetching network mode by city:', error);
        }
      }
      setNetworkModeInfo(networkInfo);
    };

    fetchNetworkModeInfo();
  }, [filteredCities]);

  const renderPolygons = () => provincesData.map((province, index) => {
    // Cambia 'cityName' por la propiedad correcta que identifica a la ciudad en filteredCities
    const isFiltered = filteredCities.some(city => province.properties.texto === city.texto);
    const fillColor = isFiltered ? '#026014' : '#026014';


    // console.log(`Rendering province: ${province.properties.provincia || province.properties.city}, Filtered: ${isFiltered}`);
    if (province.geometry.type === 'MultiPolygon') {
      return province.geometry.coordinates.map((polygon, polygonIndex) => (
        <Polygon
          key={`${index}-${polygonIndex}`}
          paths={polygon[0].map(coords => ({ lat: coords[1], lng: coords[0] }))}
          options={{ fillColor, fillOpacity: 0.75, strokeColor: 'white', strokeWeight: 2 }}
          onMouseOver={() => setSelectedProvince(province.properties)}
          onClick={() => handlePolygonClick(province)}
        />
      ));
    } else {
      return (
        <Polygon
          key={index}
          paths={province.geometry.coordinates[0].map(coords => ({ lat: coords[1], lng: coords[0] }))}
          options={{ fillColor, fillOpacity: 0.75, strokeColor: 'white', strokeWeight: 2 }}
          onMouseOver={() => setSelectedProvince(province.properties)}
          onClick={() => handlePolygonClick(province)}
        />
      );
    }
  });

  const getInfoContent = () => {
    if (!selectedProvince) return null;
    // Accede a la información de red para la provincia seleccionada
    const modeInfo = networkModeInfo[selectedProvince.provincia];
    
    // Devuelve el contenido del InfoWindow con la información de red más común y la frecuencia
    return modeInfo ? (
      <div>
        <h1>{selectedProvince.provincia || 'Provincia no disponible'}</h1>
        <p>Código: {selectedProvince.codigo || 'Código no disponible'}</p>
        <p>Moda de Red: {modeInfo.most_common_network}</p> {/* Actualizado para usar most_common_network */}
        <p>Frecuencia: {modeInfo.frequency}</p>
      </div>
    ) : (
      <div>
        <h1>{selectedProvince.provincia || 'Provincia no disponible'}</h1>
        <p>Código: {selectedProvince.codigo || 'Código no disponible'}</p>
        <p>Moda de Red: Información no disponible</p>
        <p>Frecuencia: Información no disponible</p>
      </div>
    );
  };
  
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={spainCenter} zoom={6}>
      {renderPolygons()}
      {selectedProvince && (
        <InfoWindow
          position={{ lat: selectedProvince.geo_point_2d.lat, lng: selectedProvince.geo_point_2d.lon }}
          onCloseClick={() => setSelectedProvince(null)}
        >
          {getInfoContent()}
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default HeatMap;
