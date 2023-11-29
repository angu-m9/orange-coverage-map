import express from 'express';
import locationRouter from '../routes/locationRoutes';
import cors from 'cors';
import registerRouter from '../routes/registerRoutes';
import companiesRouter from '../routes/companiesRouter';
import adminRouter from '../routes/adminRouter';
import networkModeRouter from '../routes/networkModeRouter';
import citiesByNetworkTypeRouter from '../routes/citiesByNetworkTypeRouter';



export const app = express();

app.use(express.json());
app.use(cors());
app.use('/', registerRouter );
app.use('/', locationRouter);
app.use('/', adminRouter);
app.use('/', companiesRouter);
app.use('/', networkModeRouter);
app.use('/', citiesByNetworkTypeRouter);

