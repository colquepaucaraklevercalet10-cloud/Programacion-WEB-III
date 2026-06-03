import {
    obtProductos,
    obtProductoPorID, 
    obtProductosVencidos,//añadido
    insertaProducto,
    actualizaProducto,
    eliminaProducto 
} from "../controladores/productoControlador.js";

import express from 'express';

const rutas = express.Router();

rutas.get('/', obtProductos);
rutas.get('/productosvencidos', obtProductosVencidos);//SE AÑADIO LA RUTA
rutas.get('/:id', obtProductoPorID);
rutas.post('/', insertaProducto);
rutas.patch('/:id', actualizaProducto);
rutas.delete('/:id', eliminaProducto);

export default rutas;