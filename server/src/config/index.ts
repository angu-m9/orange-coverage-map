import express from 'express';


const app = express();

const port = 5000;


app.get('/',(req, res)=>{
    res.send('servidor creado')
});


app.listen(port, ()=>{
    console.log(`servidor en puerto http://localhost:${port}`)
});


