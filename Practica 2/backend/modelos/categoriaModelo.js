import { pool } from '../config/bd.js';

export const registrarCategoria = async (categoria) => {
    const { nombre, descripcion } = categoria;
    await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
    return { mensaje: "Categoria registrada con exito" };
};

export const obtenerTodasCategorias = async () => {
    const [resultado] = await pool.query('SELECT * FROM categorias');
    return resultado;
};

export const obtenerCategoriaConProductos = async (id) => {
    const [categoria] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
    const [productos] = await pool.query('SELECT * FROM productos WHERE categoriaId = ?', [id]);
    return {
        ...categoria[0],
        productos
    };
};

export const actualizarCategoria = async (id, categoria) => {
    const { nombre, descripcion } = categoria;
    await pool.query('UPDATE categorias SET nombre = ?, descripcion = ?, updatedAt = current_timestamp() WHERE id = ?', [nombre, descripcion, id]);
    return { mensaje: "Categoria actualizada con exito" };
};

export const eliminarCategoriaYProductos = async (id) => {
    await pool.query('DELETE FROM productos WHERE categoriaId = ?', [id]);
    await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
    return { mensaje: "Categoria y sus productos eliminados con exito" };
};