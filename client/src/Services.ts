interface GeoLocationData {
  latitude?: number;
  longitude?: number;
}

export const services = {
  getData: async(url: string)=>{
    try {
      const data = await fetch(`${url}`);
      const response = await data.json();
      // console.log(response)
      return {response}
      
    } catch (error) {
      console.log(error)
    }
  },
  postData : async(url: string, body: object ) =>{
    try {
      const data = await fetch(`${url}`,{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(body)
      })

      const response = await data.json();
      console.log(response);

      return response

    } catch (error) {
      console.log(error)
    }
  },
  updateData : async (url: string, id: string, body: object) =>{
    try {
      const data = await fetch(`${url}/${id}`,{
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(body)
      })
      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  },
  deleteData : async(url: string, id: string)=>{
    try {
      const data = await fetch(`${url}/${id}`,{
        method: 'DELETE'
      });

      const response = await data.json();

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  },
  postDataLocation : async (data: GeoLocationData) => {
    try {
      const response = await fetch('http://localhost:8080/api/location',{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(data)
      })
      const location = await response.json();
      console.log(data)
      return location
  ;
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
}