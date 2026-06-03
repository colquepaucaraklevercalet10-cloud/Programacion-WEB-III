import express from 'express';
import productoRutas from './rutas/productoRutas.js';
import categoriaRutas from './rutas/categoriaRutas.js';

const app = express();

app.use(express.json());

app.use('/productos', productoRutas);
app.use('/categorias', categoriaRutas);

const PUERTO = 3001;
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});