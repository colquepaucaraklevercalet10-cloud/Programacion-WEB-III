import {
    crearCategoria,
    listarCategorias,
    verCategoriaPorID,
    editarCategoria,
    borrarCategoria
} from '../controladores/categoriaControlador.js';

import express from 'express';

const rutas = express.Router();

rutas.post('/', crearCategoria);
rutas.get('/', listarCategorias);
rutas.get('/:id', verCategoriaPorID);
rutas.patch('/:id', editarCategoria);
rutas.delete('/:id', borrarCategoria);

export default rutas;