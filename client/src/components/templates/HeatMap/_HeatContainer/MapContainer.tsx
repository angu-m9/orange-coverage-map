import React, { useEffect } from 'react';
import { fetchJson } from './FetchData';
import { initMap } from './MapEvents';
import { MapStyles } from './MapStyles';

const MapContainer: React.FC = () => {
  useEffect(() => {
    const fetchDataAndInitMap = async () => {
      try {
        const values = await fetchJson("https://mocki.io/v1/2378b24d-712f-410a-86a5-aefbdfe24f56");
        await initMap(values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAndInitMap();
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default MapContainer;
