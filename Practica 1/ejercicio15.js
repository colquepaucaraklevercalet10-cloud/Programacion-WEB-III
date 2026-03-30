//callback
function descargarArchivo(nombre, callback) {
    setTimeout(() => {
        console.log("Finalizando descarga de: " + nombre);
        callback(null, "DATOS_DEL_ARCHIVO");
    }, 2000);
}

//Conversión a Promesa 
function descargarArchivoPromesa(nombre) {
    return new Promise((resolve, reject) => {
        descargarArchivo(nombre, (err, datos) => {
            if (err) {
                reject(err); 
            } else {
                resolve(datos); 
            }
        });

    });
}
descargarArchivoPromesa("foto.jpg")
    .then(datos => console.log("Resultado con Promesa:", datos))
    .catch(err => console.log("Error:", err));