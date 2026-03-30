const proc1 = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("Paso 1 terminado");
            resolve(10);
        },1000);
    });
}
const proc2 = (valor) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(valor <0)
                reject("el valor es negativo")
            else{
                console.log("Paso 2 terminado");
                resolve(valor+10);
            }
        },1000);
    });
}
const proc3 = (valor) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(valor <0)
                reject("el valor es negativo")
            else{
                console.log("Paso 3 terminado");
                resolve(valor+10);
            }
        },1000);
    });
}
proc1()
    .then((res1) => proc2(res1))
    .then((res2) => proc3(res2))
    .then((res3) =>{
        console.log("Resultado final: " + res3);
    })
    .catch((error) => console.log("Error: "+error));