import express, { response } from 'express'

const PUERTO = 3000;
const servidor = express()



// servidor.use(express.static('front'))

// servidor.get("/",(peticion, respuesta)=>{
//     respuesta.send("ruta raiz")
// })

const GestionarGet = (peticion, respuesta)=>{
    respuesta.send("Ruta en GET")
}

const GestionarPost = (peticion, respuesta) =>{
    respuesta.send("RUTA EN POST")
}


servidor.route('/').get(GestionarGet).post(GestionarPost);


// servidor.get("/", (peticion,respuesta)=>{
//     respuesta.send(express.static('front'))
// })
// //El middleware lee archivos, bd y 
// const middleware1 = (peticion,respuesta, next)=>{
//     console.log("hola perdida")
//     next()
// }
// const middleware2 = (peticion,respuesta, next)=>{
//     console.log("hola perdida 2")
//     next()
// }

// //Otra forma de usar los middleware El use ejecuta antes de entrar a las rutas
// //servidor.use(middleware1,middleware2)


// servidor.get("/", middleware1, middleware2, (peticion,respuesta)=>{
//     //El send envia una la respuesta con el content type html
//     respuesta.status(201)
//     respuesta.send("adsdsa")
// })

// servidor.get("/productos", (peticion,respuesta)=>{
//     respuesta.setHeader('Content-Type', 'text/html;charset=utf-8')
//     respuesta.send('Hola romanchinnnnnnnfelizcumple pa te quiero mucho pepe ')
// })

// servidor.post("/",(peticion,respuesta)=>{
//     respuesta.send("POSTTT")
// })



servidor.listen(PUERTO)