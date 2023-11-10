import express, { Request, Response } from 'express';


const app = express();

const port = 5000;


app.get('/',(_req: Request, res: Response)=>{
    res.send('servidor creado')
});




app.listen(port, ()=>{
    console.log(`servidor en puerto http://localhost:${port}`)
});