/*
Objeto process:
- env
- argv
*/
import express from 'express';
process.env.PUERTO = 3000
// objeto process
const  PUERTO = process.env.PUERTO || 3000

const servidor = express();
servidor.listen(PUERTO);
