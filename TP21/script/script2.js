let colores = ["rojos" , "naranja",
    , "amarillo" , "verde" , "azul" , "violeta"];
let numeros = [2 , 9 , 12 , 5 , 8 , 3];

/*Metodo find()
let query =  colores.find((dato) => {
    return dato == "azul";
});
console.log(query);
*/

let query = colores.find(dato => dato == "verde");
console.log(query);

let queryIndex = colores.findIndex (dato => dato == "verde");
console.log(queryIndex);

//Metodo reduce()
let total = numeros.reduce((acumulador , numero) => acumulador + numero);
console.log(total);

//Array de Arrays
let  dato = [["Maga" , 123],["Pablo", 456] , ["Giuliano", [789, 2154574]]];
console.log(dato[2][1][0]);


