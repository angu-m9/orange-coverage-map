import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function HeatMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyChiXdkf8cjkHN06UbJ9-L_PRDz9MxSYII"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapTypeId='roadmap'
      >

      </GoogleMap>
    </LoadScript>
  )
}

export default HeatMap;
