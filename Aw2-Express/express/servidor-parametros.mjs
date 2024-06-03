import express from 'express'

const PUERTO = 3000

const servidor = express()

servidor.get("/productos/:id_producto", (peticion, respuesta)=>{

    //propiedad para rescatar el id 
    const idproducto = peticion.params.id_producto

    respuesta.send("El id de producto es: " + idproducto)
})

servidor.get("/productos/:id_productos/colores/:id_color",(peticion, respuesta)=>{
    const id_producto = peticion.params.id_productos
    const id_color = peticion.params.id_color
    // const {id_producto, id_color} = peticion.params
    console.log(peticion.params)
    respuesta.send("los ids son:p-" + id_producto + "c-" + id_color)
})

servidor.listen(PUERTO)