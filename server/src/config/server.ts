import express from 'express';
import locationRoutes from '../routes/locationRoutes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', locationRoutes);

app.listen(5000, () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
