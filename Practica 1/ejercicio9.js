const verificar=()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Exito');
        },3000);
    });
}
verificar()
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((error)=>{
        console.log(error);
    });