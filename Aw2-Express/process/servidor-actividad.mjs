// modulo cors()
// modulo helmet()

// ******************
// Actividad
// ******************
// Crear una API que filtre otra api para simplificar los contenidos
// a entregar a un cliente
// - Utilizar la api rick&morty -> https://rickandmortyapi.com/api/character
// - Analizar el formato entregado para poder desarrollar el script
// - Objtener todos los personajes via fetch()
// - Los personajes se deben cargar en memoria una sola vez al inicio del servidor
// - Mapear los personajes y crear un nuevo OBJETO solo las siguientes propiedades: "id", "name", "status", "species", el resto no incluirlas.
// - Crear un endpoint "/personajes" que devuelva el JSON
// - Crear un endpoint en el que se pueda consultar por "species"
// - Investigar el método json() de express

import express from 'express'

//************************ */
process.env.PUERTO = 3000
//******************+****** */

const PUERTO = process.env.PUERTO  || 3000

const servidor  = express();

//1-- CREAR UNA FUNCION QUE OBTENGA LOS OBJETOS DE LA API

let datosApi;
//Function 
async function usarApi (){
    try{
        //intentamos traer los datos
        const datos = await fetch (`https://rickandmortyapi.com/api/character`)
        const datosJSON = await datos.json()
        //Obtenemos los personajes 
        const personajes = datosJSON.results
        //Transformar los datos con .map

       const NuevoArreglo =  personajes.map((personaje)=>{
            const objetoPersonaje = {
                id: personaje.id,
                name: personaje.name,
                status: personaje.status,
                species: personaje.species
            }
            return objetoPersonajes
        })

        console.log(NuevoArreglo)
    }
    catch(error){
        console.error(error)
    }

}
usarApi()


servidor.listen(3000)