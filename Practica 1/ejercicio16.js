function validarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve("Usuario Válido");
            else reject("Usuario Inválido");
        }, 1500);
    });
}
/*
validarUsuario(1)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
*/
//Migración de Promesas a Async/Await
async function ejecutarValidacion(id) {
    try {
        console.log("Iniciando validación...");
        const mensaje = await validarUsuario(id);       
        console.log("Resultado: " + mensaje);
    } catch (error) {
        console.log("Error detectado: " + error);
    }
}
ejecutarValidacion(1);