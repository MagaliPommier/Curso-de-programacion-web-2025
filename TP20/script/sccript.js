//metodos y propiedades de strings

let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

//PROPIEDAD LENGHT (LARGO)
let largo = letras.length;
console.log(largo);

//metodos de seleccion
let letraN = letras.charAt(3);
console.log(letraN);
letraN = letras.at(4);
console.log(letraN);
letraN = letras[5];
console.log(letraN);

//Extraer seccion
let frase = "Todos tenemos dos vidas, la segunda comienza cuando te das cuenta que solo tienes una";

let seccion = frase.slice(0, 15);
console.log(seccion);
console.log(frase.slice(-20));

console.log(frase.substring(0, 15));
console.log(frase.substring(-20));

let nombre = "Nombre: Maga";
console.log(nombre.slice(8));

//Conversion de caja
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());


//Combinar metodos
console.log(nombre.slice(8).toUpperCase());

//Trim(recorte)
let espaciado = "   espacio de mas   ";
console.log(espaciado);
console.log(espaciado.trim());

//Reemplaza (transversal regExp)
let saludo = "Hola MAGA";
console.log(saludo);
console.log(saludo.replace("MAGA", "Magui"));

//Split (separar)
let colores = "Rojo, Verde, Azul";
console.table(colores.split(","));

//Includes
console.log(colores.includes("Verde"));
console.log(colores.includes("verde"));

//Comillado
let dobles = "permiten comillas simples dentro, I'm studying JS";
let simples = 'Permite "Comillas dobles"dentro';
let backtick = `'Permite "Dobles" y 'Simples'`;
let localidad = "CABA";
console.log("localidad: " + localidad + ", Bs As");
console.log(`localidad: ${localidad}, Bs As`);



