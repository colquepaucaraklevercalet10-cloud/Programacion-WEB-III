const separar=(numeros)=>{
    let resultado={
        pares:[],
        impares:[]
    };
    for(let num of numeros ){
        if ( num%2 === 0){
            resultado.pares.push(num);
        }else{
            resultado.impares.push(num);
        }
    }
    return resultado;
}
let obj = separar([1,2,3,4,5]);
console.log(obj);