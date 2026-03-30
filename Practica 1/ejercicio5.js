const palindromo = (texto)=>{
    let palabra = texto.toLowerCase();
    let reversa="";
    for(let i=palabra.length-1;i>=0;i--){
        reversa = reversa + palabra[i];
    }
    if(palabra ===reversa)
        return true;
    else
        return false;
};
let band = palindromo("oruro");
let band2 = palindromo("hola");
console.log(band);
console.log(band2);
