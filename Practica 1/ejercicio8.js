function ejecutar (callback){
    console.log("ejecutando programa...");
    setTimeout(()=>{
        console.log("Proceso terminado");
        callback();
    },2000);
}
const callback = () => {
    console.log("mostrando resultado final...");
}
ejecutar(callback);