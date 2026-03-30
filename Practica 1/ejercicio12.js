//ejemplo de anidamiento de callbacks
/*function obtenerUsuario(id, callback) {
    setTimeout(() => {
        console.log("Usuario encontrado");
        callback("Klever"); 
    }, 1000);
}

function obtenerPedido(usuario, callback) {
    setTimeout(() => {
        console.log("Pedido de " + usuario + " encontrado");
        callback("Pizza"); 
    }, 1000);
}

function procesarPago(pedido, callback) {
    setTimeout(() => {
        console.log("Pago de " + pedido + " procesado");
        callback("Confirmación: Éxito"); 
    }, 1000);
}

obtenerUsuario(1, (usuario) => {
    obtenerPedido(usuario, (pedido) => {
        procesarPago(pedido, (confirmacion) => {
            console.log(confirmacion);
        });
    });
});
*/
// Usando async y await
const obtenerUsuarioAsync = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Usuario obtenido");
            resolve({ id: id, nombre: "Klever" });
        }, 1000);
    });
}
const obtenerPedidoAsync = (usuario) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Pedido de " + usuario.nombre + " obtenido");
            resolve("Laptop Gamer");
        }, 1000);
    });
}
const procesarPagoAsync = (pedido) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Pago de " + pedido + " procesado");
            resolve("¡Compra Exitosa!");
        }, 1000);
    });
}
async function realizarCompra() {
    try {
        const usuario = await obtenerUsuarioAsync(1);
        const pedido = await obtenerPedidoAsync(usuario);
        const confirmacion = await procesarPagoAsync(pedido);
        console.log(confirmacion);
    } catch (error) {
        console.log("Error: " + error);
    }
}
realizarCompra();