import { useState, useEffect } from 'react';
import { GoogleMap, Polygon, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const libraries = ['visualization'];
const HeatMap = () => {
  
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

  const loadGeoJsonData = async () => {
    try {
      // Asegúrate de que la ruta del archivo GeoJSON es correcta
      const response = await fetch(geoJsonPath || '/provincias-espanolas.geojson');
      const data = await response.json();
      setProvincesData(data.features);
    } catch (error) {
      console.error('Error fetching GeoJSON:', error);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      loadGeoJsonData();
    }
  }, [isLoaded]);

  const renderPolygons = (province, index) => {
    if (province.geometry.type === 'MultiPolygon') {
      return province.geometry.coordinates.map((polygon, polygonIndex) => (
        <Polygon
          key={`${index}-${polygonIndex}`}
          paths={polygon[0].map(coord => ({ lat: coord[1], lng: coord[0] }))}
          options={{
            fillColor: 'red', // Aquí puedes tener tu lógica para diferentes colores
            fillOpacity: 0.35,
            strokeColor: 'white',
            strokeWeight: 1,
          }}
          onMouseOver={() => setSelectedProvince(province.properties)}
        />
      ));
    } else if (province.geometry.type === 'Polygon') {
      return (
        <Polygon
          key={index}
          paths={province.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] }))}
          options={{
            fillColor: 'red', // Aquí puedes tener tu lógica para diferentes colores
            fillOpacity: 0.35,
            strokeColor: 'white',
            strokeWeight: 1,
          }}
          onMouseOver={() => setSelectedProvince(province.properties)}
        />
      );
    }
    return null;
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
            {/* Aquí puedes agregar más información si es necesario */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default HeatMap;
