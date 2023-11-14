export const postData = async (data : {}) => {
    try {
      const response = await fetch('http://localhost:5000/network-quality', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      

      return await response.json();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  