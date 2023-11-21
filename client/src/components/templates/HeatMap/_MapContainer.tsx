import React, { useEffect } from 'react';

// Función para realizar una solicitud GET y obtener JSON
async function fetchJson(url: string): Promise<any[]> {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
}

// Función para inicializar el mapa y gestionar eventos
async function initMap(values: any[]): Promise<void> {
    const mapElement = document.getElementById("map");
    let map: any;
    let infoWindow: any;
    
    if (mapElement) {
        // Crear un nuevo mapa de Google y asignarlo al elemento con el ID "map"
        map = new google.maps.Map(mapElement, {
            zoom: 5,
            center: {
                lat: 40.4,
                lng: -3.7,
            }
        });
    } else {
        console.error("Elemento 'map' no encontrado");
    }

    // Crear una ventana de información para los marcadores en el mapa
    infoWindow = new window.google.maps.InfoWindow();

    try {
        // Cargar datos GeoJSON en el mapa
        const urlGeoJson = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/provincias-espanolas/exports/geojson?lang=en&timezone=Europe%2FBerlin";
        map.data.loadGeoJson(urlGeoJson);

        map.data.setStyle((feature: any) => {
            // Lógica para establecer los estilos según las propiedades
            let value = 0;
            let name = "error";
            const codigo: number = Number(feature.getProperty("codigo"));

            let valueObject = values.find(
                (obj) => obj.Codigo == feature.getProperty("codigo")
            );

            if (valueObject !== undefined) {
                value = valueObject ? valueObject.Score_red : 0;
                name = valueObject ? valueObject.Texto : "error";
            }

            let fillColor;
            if (value === 1) { fillColor = "#FF0000"; }
            else if (value === 2) { fillColor = "#FF4500"; }
            else if (value === 3) { fillColor = "#FFD700"; }
            else if (value === 4) { fillColor = "#32CD32"; }
            else if (value === 5) { fillColor = "#FF6600"; }

            return {
                fillColor: fillColor,
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "black",
            };
        });

        map.data.addListener("mouseover", function (_event: any) {
            const value = _event.feature.getProperty("value");
            const name = _event.feature.getProperty("name");
            const codigo = _event.feature.getProperty("codigo");
            infoWindow.setContent(
                `Codigo: ${codigo}<br>Valore: ${value}<br>Name: ${name}`
            );
            infoWindow.setPosition(_event.latLng);
            infoWindow.open(map);
        });

        map.data.addListener("click", function (_event: any) {
            const codigo = _event.feature.getProperty("codigo");
            const value = _event.feature.getProperty("value");
            alert(`Codigo del poligono: ${codigo}\nValore del poligono: ${value}`);
        });

        map.data.addListener("mouseout", function () {
            infoWindow.close();
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

const MapContainer: React.FC = () => {
    useEffect(() => {
        const fetchDataAndInitMap = async () => {
            try {
                const values: any = await fetchJson("https://mocki.io/v1/2378b24d-712f-410a-86a5-aefbdfe24f56");
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
