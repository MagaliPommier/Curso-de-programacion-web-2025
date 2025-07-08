if(2 == 2 ){
    console.log(" Condicional verdadero");
}else {
    console.log("Condicional falso");
}
//Scoope
let resp;
if( 2 > 1 ) {
     resp = "Numero mayor";
} else {
     resp = "Numero menor";
}
console.log(resp);

//if else if
let semaforo = "rojo";
if (semaforo = "verde"){
    console.log("Avanzar");
} else if(semaforo = "amarillo"){
    console.log("Precaucion");
} else if (semaforo = "rojo"){
    console.log("Detenerse!!!");
} else{
console.error("semaforo roto");
}

/*let monto = window.prompt("Ingresar monto de la compra";)
if(monto > 50000){
    console.log("25% de descuento");
     console.log( "Valor a pagar: ", monto * 0.75)

} else if (monto > 20000){
 console.log("10% de descuento");
 console.log( "Valor a pagar: " , monto * 0.9 )

} else {
     console.log("sin descuento");
 console.log( "Valor a pagar: ", monto );
}
  */

/*let edad = window.prompt("Ingresa tuy edad: ");
if (edad > 18) {
     console.log( "Sos mayor de edad")
} else {
    console.log( "Sos menor de edad ")}*/

    //operador ternario
   /* let respEdad = edad > 17 ? "Mayor" : "Menor";
     console.log(respEdad);*/

     //Operadores && y ||

    /* let valor1 = false
     let valor2 = true
     console.log("operador &&", valor1 && valor2);
     console.log("operador ||", valor1 || valor2);


if(10 == 10 && 20 == 30){
    console.log("Los numeros coinciden");
} else {
    console.log("Los numeros no coinciden");
}

let cantidad = window.prompt("cantidad de productos");
let valorCompra = window.prompt("total de la compra");

if (cantidad > 10 && valorCompra > 20000){
    let valorFinal = valorCompra * 0.8;
console.log("Valor final con descuento: " + valorFinal);
} else {
    console.log("Valor final sin descuento: " + valorCompra);
}*/

//Switch
console.clear();
let color = window.prompt("color del semaforo");
switch(color){
    case "verde":
    console.log("Avanzar");
    break;
    case "amarillo":
        console.log("precaucion");
        break;
        case "rojo":
            console.log("detenerse");
            break;
            default:
                console.log("Semaforo roto");
                break;
}