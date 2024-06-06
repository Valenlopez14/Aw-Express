import express from 'express'
import pg from 'pg'


// import ruta from './ruta.mjs';
const {Pool} = pg;
const pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'tienda',
    max: 20,
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000,
})
const app = express();
const PUERTO = process.env.PUERTO || 3000

app.listen(PUERTO, ()=>{
    console.log("servidor escuchando")
})

app.get("/productos",async (req, res)=>{
    const respuesta =   await pool.query('SELECT * FROM productos')
    console.log(respuesta)
    res.send('postgres')
})


app.listen(3000)