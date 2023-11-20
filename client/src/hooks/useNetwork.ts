import { useState, useEffect } from 'react';


export const useNetwork = (initialState: NetworkState = {}) => {
    const [state, setState] = useState<NetworkState>(initialState);

    useEffect(() => {
        const connection = navigator.connection;
        
        const updateNetworkInfo = () => {
            setState({
                online: navigator.onLine,
                downlink: connection.downlink,
                downlinkMax: connection.downlinkMax,
                effectiveType: connection.effectiveType,
                rtt: connection.rtt,
                type: connection.type,
            });
        };

        // Establecer la información de la red inicialmente
        updateNetworkInfo();

        // Escuchar cambios en la conexión de red
        connection.addEventListener('change', updateNetworkInfo);

        // Limpiar el listener al desmontar el componente
        return () => {
            connection.removeEventListener('change', updateNetworkInfo);
        };
    }, []);

    console.log(state);
    return state;
};
