import express from 'express';
import locationRouter from '../routes/locationRoutes';
import cors from 'cors';
import registerRouter from '../routes/registerRoutes';
import companiesRouter from '../routes/companiesRouter';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/', registerRouter );
app.use('/', locationRouter);
// app.use('/', adminRouter);
app.use('/', companiesRouter);

app.listen(5000, () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
