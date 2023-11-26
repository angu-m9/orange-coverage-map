import { useState, useEffect } from 'react';
import { GoogleMap, Polygon, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { services } from '../../../services/services';

const libraries = ['visualization'];

const HeatMap = ({ filteredCities }) => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const geoJsonPath = import.meta.env.VITE_GEOJSON_PATH;

  const containerStyle = {
    width: '100%',
    height: '550px',
  };

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
      const data = await response.json();
      setProvincesData(data.features);
    } catch (error) {
      console.error('Error fetching GeoJSON:', error);
    }
  };

  const handlePolygonClick = async (cityName) => {
    try {
      console.log(`Fetching network mode for city: ${cityName}`);
      const modeInfo = await services.getNetworkModeByCity(cityName);
      console.log('Received network mode info:', modeInfo);
      setNetworkModeInfo((prevInfo) => ({
        ...prevInfo,
        [cityName]: modeInfo[cityName], // Adjust this line if needed based on the actual structure of the response
      }));
    } catch (error) {
      console.error('Error fetching network mode by city:', error);
    }
  };
  
  
  
  



  const renderPolygons = (province, index) => {
    const isFiltered = filteredCities.some(city => city.cityName === province.properties.provincia);
    const fillColor = isFiltered ? 'green' : 'red';

    // Handle MultiPolygon geometries
    if (province.geometry.type === 'MultiPolygon') {
      return province.geometry.coordinates.map((polygon, polygonIndex) => (
        <Polygon
          key={`${index}-${polygonIndex}`}
          paths={polygon[0].map(coords => ({ lat: coords[1], lng: coords[0] }))}
          options={{
            fillColor: fillColor,
            fillOpacity: 0.35,
            strokeColor: 'white',
            strokeWeight: 1,
          }}
          onMouseOver={() => setSelectedProvince(province.properties)}
          onClick={() => handlePolygonClick(province.properties.provincia)}
        />
      ));
    }

    // Handle regular Polygon geometries
    return (
      <Polygon
        key={index}
        paths={province.geometry.coordinates[0].map(coords => ({ lat: coords[1], lng: coords[0] }))}
        options={{
          fillColor: fillColor,
          fillOpacity: 0.35,
          strokeColor: 'white',
          strokeWeight: 1,
        }}
        onMouseOver={() => setSelectedProvince(province.properties)}
        onClick={() => handlePolygonClick(province.properties.provincia)}
      />
    );
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const getInfoContent = (province) => {
    const modeInfo = networkModeInfo[province];
    return modeInfo ? (
      <div>
        <p>Moda de Red: {modeInfo.network}</p>
        <p>Frecuencia: {modeInfo.frequency}</p>
      </div>
    ) : (
      <div>
        <p>Moda de Red: Información no disponible</p>
        <p>Frecuencia: Información no disponible</p>
      </div>
    );
  };
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={spainCenter}
      zoom={6}
    >
      {provincesData.map(renderPolygons)}
  
      {selectedProvince && (
        <InfoWindow
          position={{
            lat: selectedProvince.geo_point_2d?.lat,
            lng: selectedProvince.geo_point_2d?.lon,
          }}
          onCloseClick={() => setSelectedProvince(null)}
        >
          <div>
            <h1>{selectedProvince.provincia || 'Provincia no disponible'}</h1>
            <p>Código: {selectedProvince.codigo || 'Código no disponible'}</p>
            {getInfoContent(selectedProvince.provincia)}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default HeatMap;
