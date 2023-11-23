import { useState, useEffect } from 'react';
import { GoogleMap, Polygon, Marker, useJsApiLoader } from '@react-google-maps/api';


// api key de google
const googleMapsApiKey = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg';

//getJson con datos de delimitaciones territoriales
const urlGeoJson = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/provincias-espanolas/exports/geojson?lang=en&timezone=Europe%2FBerlin";


//funciona para extraer datos del geoJson
async function fetchJson(url: string) {
  try {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

//estilos del mapa
const containerStyle = {
  width: '100%',
  height: '550px'
};




//inicio de componente
const HeatMap = () => {


  //ubicacion de España
  const spainCenter = {
    lat: 40.4637,
    lng: -3.7492,
  };


  const library = ['visualization']
  //datos para cargar api de google de manera asincronica y devuelve un objeto (isLoaded) que indica si la carga a sido exitosa
  const { isLoaded }: { isLoaded: boolean; loadError: Error | undefined; } = useJsApiLoader({

    id: 'google-map-script',
    googleMapsApiKey,
    library, 
  });


  //estados del mapa
  const [map, setMap] = useState(null);
  const [provincesData, setProvincesData] = useState([]);

  
  //obtener datos de delimitaciones territoriales cuando se monta el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const geoJson = await fetchJson(urlGeoJson);
        setProvincesData(geoJson.features);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{
    const getData =async()=>{
      try {
        const data = await fetch('https://mocki.io/v1/2378b24d-712f-410a-86a5-aefbdfe24f56')
        const response = await data.json()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])


  //si loaded falla el api se renderizara este componente
  if (!isLoaded) {
    return <div>...cargando</div>;
  }


  //metodo que pintara el poligono segun calidad de wifi
  const getColor = (intensity) => {
    let fillColor;

    if (intensity === 2) { fillColor = "green"; }
    else if (intensity === 3) { fillColor = "yellow"; }
    else if (intensity === 4) { fillColor = "red";}

    return fillColor;
  };


  const heatmapData = [
    { location: { lat: 40.416775, lng: -3.703790 }, weight: 10 },
    { location: { lat: 40.416775, lng: -3.703790 }, weight: 20 },
  ];
  

  


  //componente HeatMap
  return (

    //componente principal que renderiza el mapa de google
    <GoogleMap
      mapContainerStyle={containerStyle} //estilos del mapa
      center={spainCenter} //ubica la direccion del mapa
      zoom={6} //zoom del mapa
      onLoad={(map) => setMap(map)} //funcion que se llama cuando el mapa se carga
    >




      {/* le indica al componente que si map y provincesData tienen valor renderize el mapa */}
      {map && provincesData && (
        <>

        {/* mapear datos obtenidos de provincesData para renderizar los poligonos */}
          {provincesData.map((province, index) => (
            //componente que renderiza un poligono en el mapa de google
            <Polygon

              key={index} //clave para el poligono que es el indice de cada elemento dentro de provincesData

              //contiene un array de objetos con las coordenadas de cada poligono que dibuja en el mapa
              paths={province.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] }))}


              //personalizar poligonos
              options={{
                //color de relleno del poligono

                fillColor: 'red', // Utiliza la intensidad del polígono para dar un colo diferente



                //
                strokeColor: 'green',

                //ancho del borde del poligono
                strokeWeight: 2,
              }}
            />
          ))}




          {/* coloca el puntero en la ubicacion indicada  */}
          <Marker position={spainCenter} />
        </>
      )}

      
    </GoogleMap>
  );
}

export default HeatMap;

