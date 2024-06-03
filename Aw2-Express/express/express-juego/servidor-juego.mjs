import express, { response } from 'express'

const PUERTO = 3000;
const servidor = express()



servidor.get("/:coordenada",(peticion, respuesta)=>{
    
    const {coordenada} = ["L1", "L2", "L4"]
    peticion.params = coordenada
    respuesta.send("Llaves Encontadas")
})


servidor.get("/:coordenada", (peticion, respuestas)=>{
    const {coordenada} = ["P1", "P2", "P3"]
    peticion.params= coordenada
    respuesta.send("Puertas Encontradas")
})


servidor.listen(PUERTO)
