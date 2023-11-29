import { app } from "../config/app";
export const tokenSecret = process.env.TOKEN_SECRET || "defaultSecret";
export const tokenExpiration = process.env.TOKEN_EXPIRATION || "1h";

console.log(`Token Secret: ${tokenSecret}`);
console.log(`Token Expiration: ${tokenExpiration}`);


const PORT = 5000;


export const server = app.listen(PORT , () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
