import { useState, useEffect } from 'react';
import { services } from '../../../services/services';
import { GoogleMap, Polygon, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const libraries = ['visualization'];

const HeatMap = ({ filteredCities }) => { // Asegúrate de recibir filteredCities como prop
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const geoJsonPath = import.meta.env.VITE_GEOJSON_PATH;

  const containerStyle = {
    width: '100%',
    height: '550px',
  };

  const spainCenter = { lat: 40.4637, lng: -3.7492 };

  const [provincesData, setProvincesData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);

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
      const response = await fetch(geoJsonPath || '/provincias-espanolas.geojson');
      const data = await response.json();
      setProvincesData(data.features);
    } catch (error) {
      console.error('Error fetching GeoJSON:', error);
    }
  };

  const handlePolygonClick = async (cityName) => {
    try {
      const data = await services.getNetworkModeByCity(cityName);
      console.log(data);
    } catch (error) {
      console.error('Error al obtener el modo de red:', error);
    }
  };

  const renderPolygons = (province, index) => {
    const isFiltered = filteredCities.some(city => city.cityName === province.properties.name); // Asegúrate de que 'name' es la propiedad correcta en tus datos
    const fillColor = isFiltered ? 'green' : 'red';

    return province.geometry.type === 'MultiPolygon'
      ? province.geometry.coordinates.map((polygon, polygonIndex) => (
          <Polygon
            key={`${index}-${polygonIndex}`}
            paths={polygon[0].map(coord => ({ lat: coord[1], lng: coord[0] }))}
            options={{
              fillColor: fillColor,
              fillOpacity: 0.35,
              strokeColor: 'white',
              strokeWeight: 1,
            }}
            onMouseOver={() => setSelectedProvince(province.properties)}
            onClick={() => handlePolygonClick(province.properties.provincia)}
          />
        ))
      : (
        <Polygon
          key={index}
          paths={province.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] }))}
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
            lat: selectedProvince.geo_point_2d.lat,
            lng: selectedProvince.geo_point_2d.lon,
          }}
          onCloseClick={() => setSelectedProvince(null)}
        >
          <div>
            <h1>{selectedProvince.provincia}</h1>
            <p>Código: {selectedProvince.codigo}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default HeatMap;
