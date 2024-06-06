import {Rout, Router} from 'express'

const ruta = Router()

ruta.get('/productos',()=>{
    console.log("ruta")
})

export default ruta