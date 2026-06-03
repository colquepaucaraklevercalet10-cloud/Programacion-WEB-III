import {
    registrarCategoria,
    obtenerTodasCategorias,
    obtenerCategoriaConProductos,
    actualizarCategoria,
    eliminarCategoriaYProductos
} from '../modelos/categoriaModelo.js';

import { check, validationResult } from 'express-validator';

export const crearCategoria = async (req, res) => {
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
    await check('descripcion').notEmpty().withMessage('La descripcion no puede ir vacia').run(req);

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).send({ mensaje: errores.array() });
    }

    const nuevaCategoria = await registrarCategoria(req.body);
    res.status(201).json(nuevaCategoria);
};

export const listarCategorias = async (req, res) => {
    const categorias = await obtenerTodasCategorias();
    res.status(200).json(categorias);
};

export const verCategoriaPorID = async (req, res) => {
    const id = req.params.id;
    const categoriaInfo = await obtenerCategoriaConProductos(id);
    res.status(200).json(categoriaInfo);
};

export const editarCategoria = async (req, res) => {
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
    await check('descripcion').notEmpty().withMessage('La descripcion no puede ir vacia').run(req);

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).send({ mensaje: errores.array() });
    }

    const resultado = await actualizarCategoria(req.params.id, req.body);
    res.status(200).json(resultado);
};

export const borrarCategoria = async (req, res) => {
    const id = req.params.id;
    const resultado = await eliminarCategoriaYProductos(id);
    res.status(200).json(resultado);
};