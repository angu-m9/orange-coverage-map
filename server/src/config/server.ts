import app from "./app";

const PORT = 5000;


export const server = app.listen(PORT , () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});


