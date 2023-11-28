import { useState, useEffect } from 'react';


// Se añade un parámetro userUuid que debe pasarse al hook
export const useNetwork = (userUuid) => {
  const [networkState, setNetworkState] = useState({
    online: navigator.onLine,
    downlink: null,
    downlinkMax: null,
    effectiveType: null,
    rtt: null,
    type: null,
    uuid: userUuid, // Aquí almacenas el UUID que se pasó al hook
  });

  useEffect(() => {
    const updateNetworkInfo = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

      setNetworkState({
        online: navigator.onLine,
        downlink: connection?.downlink,
        downlinkMax: connection?.downlinkMax,
        effectiveType: connection?.effectiveType,
        rtt: connection?.rtt,
        type: connection?.type,
        uuid: userUuid, // Continúas pasando el UUID a tu estado
      });
    };

    // Escuchar cambios en la conexión de red
    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);
    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkInfo);
    }

    // Establecer la información de la red inicialmente
    updateNetworkInfo();

    // Limpiar los listeners al desmontar el componente
    return () => {
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkInfo);
      }
    };
  }, [userUuid]); // Dependencia en userUuid para actualizar si cambia

  return networkState;
};
