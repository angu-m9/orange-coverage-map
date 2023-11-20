import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.4,
  lng: -3.70
};

function HeatMap(): React.JSX.Element {
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
