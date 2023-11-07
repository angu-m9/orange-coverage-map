import express from 'express';

const app = express();
const port = 5005;

app.get('/',(_req, res)=>{
    res.send('servidor creado')
})

app.listen(port,()=>{
    console.log(`servidor funcionando en el puerto http://localhost:${port}`)
})