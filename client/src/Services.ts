
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
  postData: async (url : string, body : object) => {
    try {
      const data = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
  
      if (data.ok) {
        const jsonResponse = await data.json();
        console.log(jsonResponse);
        return jsonResponse;
      } else {
        // Manejar errores o respuestas no exitosas aquí
        console.error(`HTTP error! status: ${data.status}`);
        return null; // O manejar de otra manera
      }
    } catch (error) {
      console.error('Error en la petición POST:', error);
      return null; // Asegúrate de manejar este caso en tu componente
    }
  }
  ,
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
  }
}