import express, { response } from 'express'

const PUERTO = 3000;

const general = express.Router()
const autenticacion = express.Router()


const servidor = express()

//utilizalos los enrutamientos 
servidor.use(general, autenticacion)
//general
//general.use()
general.get("/",(peticion, respuestas)=>{
    respuestas.send("Hola get")
})
//autenticacion 
autenticacion.get("/login",(peticion, respuestas)=>{
    respuestas.send("ruta autenticacion")
})

servidor.listen(PUERTO)
