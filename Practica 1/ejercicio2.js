const invertirFrase=(frase)=>{
    let resultado ="";
    for(let i = frase.length -1; i>=0;i--){
        resultado = resultado + frase[i];
    }
    return resultado;
};
let cad= invertirFrase("abcd");
console.log(cad);