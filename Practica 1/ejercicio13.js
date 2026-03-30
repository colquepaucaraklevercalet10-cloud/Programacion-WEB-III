//ejemplo de anidamiento

const obtenerUsuario = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, nombre: "Klever" }), 1000);
    });
};

const obtenerPedido = (usuario) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Laptop Gamer para " + usuario.nombre), 1000);
    });
};
/*
obtenerUsuario(1).then((usuario) => {
    obtenerPedido(usuario).then((pedido) => {
        console.log(pedido);
    });
});
*/
//usando async y await
async function procesarCompra() {
    try {
        const usuario = await obtenerUsuario(1);
        const pedido = await obtenerPedido(usuario);
        
        console.log("Resultado final: " + pedido);
    } catch (error) {
        console.log("Error en el proceso: " + error);
    }
}
procesarCompra();