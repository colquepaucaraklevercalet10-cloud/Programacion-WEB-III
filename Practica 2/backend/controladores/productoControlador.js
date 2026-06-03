import { 
  obtTodo,
  obtProducto,
  obtVencidos,//AÑADIDO
  inserta,
  actualiza,
  elimina
} from '../modelos/productoModelo.js';

import {check, validationResult } from 'express-validator';

export const obtProductos = async (req, res) => {
  const productos = await obtTodo();
  res.status(200).json(productos);
}

export const obtProductoPorID = async (req,res) => {
  const id = req.params.id;
  const producto = await obtProducto(id); 
  res.status(200).json(producto);
}

//SE AÑADIO
export const obtProductosVencidos = async (req, res) => {
    const productos = await obtVencidos();
    res.status(200).json(productos);
}

export const insertaProducto = async (req,res) => {
  // Manejo de errores
  await check('nombre')
    .notEmpty().withMessage('El nombre no puede ir vacio')
    .run(req);
  await check('precio')
    .isNumeric().withMessage('El precio tiene que ser numerico').custom(resultado => resultado > 0).withMessage('El precio no es valido').run(req);
    //añadido
  await check('fecha_vencimiento').isDate().withMessage('La fecha de vencimiento debe ser una fecha valida (AAAA-MM-DD)').run(req);
  const errores = validationResult(req);
  if (!errores.isEmpty()){
    return res.status(400).send({mensaje: errores.array()})
  }
  const productoNuevo = await inserta(req.body);
  res.status(201).json(productoNuevo);
};

export const actualizaProducto = async (req,res) => {
  await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
  await check('precio').isNumeric().withMessage('El precio tiene que ser numerico').custom(resultado => resultado > 0)
    .withMessage('El precio no es valido').run(req);
  //añadido
  await check('fecha_vencimiento').isDate().withMessage('La fecha de vencimiento debe ser una fecha valida (AAAA-MM-DD)').run(req);
  const errores = validationResult(req);
  if (!errores.isEmpty()){
    return res.status(400).send({mensaje: errores.array()})
  }
  const productoActualizado = await actualiza(req.params.id, req.body);
  res.status(201).json(productoActualizado);
}

export const eliminaProducto = async (req,res) => {
  const producto = await elimina(req.params.id); 
  res.status(200).json(producto);
}
