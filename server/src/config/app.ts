import express from 'express';
import locationRouter from '../routes/locationRoutes';
import cors from 'cors';
import registerRouter from '../routes/registerRoutes';
import companiesRouter from '../routes/companiesRouter';
import adminRouter from '../routes/adminRouter';
import networkModeRouter from '../routes/networkModeRouter';
import citiesByNetworkTypeRouter from '../routes/citiesByNetworkTypeRouter';

export const tokenSecret = process.env.TOKEN_SECRET || "defaultSecret";
export const tokenExpiration = process.env.TOKEN_EXPIRATION || "1h";

console.log(`Token Secret: ${tokenSecret}`);
console.log(`Token Expiration: ${tokenExpiration}`);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', registerRouter );
app.use('/', locationRouter);
app.use('/', adminRouter);
app.use('/', companiesRouter);
app.use('/', networkModeRouter);
app.use('/', citiesByNetworkTypeRouter);

export default app;
