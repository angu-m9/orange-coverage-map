// Declaración de variables
let infoWindow: any; // Ventana de información para marcadores
let featureCounter: number = 1; // Contador para características
let map: any; // Mapa de Google
let values: any[] = []; // Array para almacenar valores
let urlGeoJson: string = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/provincias-espanolas/exports/geojson?lang=en&timezone=Europe%2FBerlin"; // URL para datos GeoJSON

// Función para realizar una solicitud GET y obtener JSON
async function fetchJson(url: string): Promise<string> {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  });
}

// Función asincrónica para inicializar el mapa
async function initMap() {
  // Crear un nuevo mapa de Google y asignarlo al elemento con el ID "map"
  const mapElement = document.getElementById("map");
  if (mapElement) {
    map = new google.maps.Map(mapElement, {
      zoom: 5, // Nivel de zoom inicial
      center: {
        lat: 40.4, // Latitud inicial
        lng: -3.7, // Longitud inicial
      }
    });
  } else {
    console.error("Elemento 'map' no encontrado");
  }

  // Crear una ventana de información para los marcadores en el mapa
  infoWindow = new google.maps.InfoWindow();

  // Intentar obtener valores de un endpoint simulado (mock)
  try {
    values = (await fetchJson(
      "https://mocki.io/v1/2378b24d-712f-410a-86a5-aefbdfe24f56"
    )).record;

    // Cargar datos GeoJSON en el mapa (a través de la URL)
    map.data.loadGeoJson(urlGeoJson);

    // Establecer el estilo de las características del mapa según sus propiedades
    map.data.setStyle((feature :any) => {
      // Inicializar variables de valor y nombre
      let value = 0;
      let name = "error";
      const codigo:number = Number(feature.getProperty("codigo"));
      console.log(codigo)

      // Buscar un objeto de valor según el código de la característica
      let valueObject = values.find(
        (obj) => obj.Codigo == feature.getProperty("codigo")
      );

      // Asignar valor y nombre si se encuentra el objeto
      if (valueObject !== undefined) {
        value = valueObject ? valueObject.Score_red : 0;
        name = valueObject ? valueObject.Texto : "error";
      }

      // Asignar propiedades "value" y "name" a la característica
      feature.setProperty("value", value);
      feature.setProperty("name", name);

      // Asignar un color de relleno según el valor
      let fillColor;
      if (value == 1) { fillColor = "#FF0000"; }
      else if (value == 2) { fillColor = "#FF4500"; }
      else if (value == 3) { fillColor = "#FFD700"; }
      else if (value == 4) { fillColor = "#32CD32"; }
      else if (value == 5) { fillColor = "#FF6600"; }

      // Devolver un objeto de estilo para la característica
      return {
        fillColor: fillColor,
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: "black",
      };
    });

    // Agregar eventos para mostrar información al pasar el mouse, clic y al retirar el mouse
    map.data.addListener("mouseover", function (_event: any) { /* ... */ });
    map.data.addListener("click", function (_event: any) { /* ... */ });
    map.data.addListener("mouseout", function () { /* ... */ });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamar a la función para inicializar el mapa
initMap();