const contarVocales = (texto) => {
    const vocales = "aeiou";
    let textMin = texto.toLowerCase();
    let resultado={};

    for (let letra of textMin){
       if( vocales.includes(letra)){

        if(resultado[letra])
            resultado[letra] = resultado[letra]+1;
        else 
            resultado[letra]=1;
        }
    }
    return resultado;
};
let obj = contarVocales("eufoOIAria");
console.log(obj);

//Este seria el caso para ver cuantas letras minusculas y mayusculas aparecen
/*const contarVocales = (texto) => {
    const vocales = "aeiouAEIOU";
    //let textoMin = texto.toLowerCase();
    let resultado={};

    for (let letra of vocales){
       if( vocales.includes(letra)){

        if(resultado[letra])
            resultado[letra] = resultado[letra]+1;
        else 
            resultado[letra]=1;
        }
    }
    return resultado;
};
let obj = contarVocales("eufoOIAria");
console.log(obj);*/