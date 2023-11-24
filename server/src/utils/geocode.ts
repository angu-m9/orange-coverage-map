import 'dotenv/config';

export const geocode = async (latitude: number, longitude: number): Promise<string> => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        const addressComponents = data.results[0].address_components;
        const cityComponent = addressComponents.find((component: any) =>
          component.types.includes('locality') || component.types.includes('administrative_area_level_1')
        );
        return cityComponent ? cityComponent.long_name : '';
      } else {
        throw new Error('No city found');
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
      throw error; // We re-throw the error to handle it in the calling function.
    }
  };
  