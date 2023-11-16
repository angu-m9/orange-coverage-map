import express from 'express';
import locationRouter from '../routes/locationRoutes';
import cors from 'cors';
import registerRouter from '../routes/registerRoutes';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/', registerRouter );
app.use('/', locationRouter);

app.listen(5000, () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
