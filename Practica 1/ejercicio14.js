//La Promesa Original
const promesaSuerte = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡Ganaste la lotería!");
        }, 2000);
    });
};
//Conversión a Callback
function convertirACallback(callback) {
    console.log("Iniciando promesa interna...");
    promesaSuerte()
        .then((resultado) => {
            callback(null, resultado);
        })
        .catch((error) => {
            callback(error, null);
        });
}
convertirACallback((err, dato) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Resultado por callback:", dato);
    }
});