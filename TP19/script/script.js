//Funciones
console.log("Hola mundo");

//Funciones declaradas

function hola(nombre){
    console.log("Hola " + nombre);
}
hola("Maga");
hola("Juan");

//Funciones anonimas
const chau = function(nombre){
    console.log("Chau " + nombre);
}
chau("Maga");

//Funciones flecha ()=>{}

const bienvenidos = (nombre)=>{
    console.log("Bienvenido " + nombre);
}
bienvenidos("Maga");

//Return

//capturar return
let retorno = hola("test de retorno");
console.log(retorno)


//declarar return
function calculo(a, b){
let suma = a + b;
return suma;
}
retorno = calculo(2, 5);
console.log(retorno);

//Opcion 2

function calculo2 (a, b){
    return a + b;
}
console.log(calculo2(3, 9));

//return en funcion flecha

const calculoFlecha = ( a, b)=>{return a + b};
 console.log(calculoFlecha(5, 55));

//opcion 2
 const calculoFlecha2 = ( a, b)=> a + b;
 console.log(calculoFlecha(25, 4));

 //IIFE inmediatly invoked function expressions
(function iifePrivada(){
    console.log("Funcion IIFE privada")
})();
//iifePrivada()

//Callbacks
console.clear();
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

console.log(restar(10, 7));

const calculadora = (a, b, cb) => cb(a, b);
console.log (calculadora(20, 80, sumar));