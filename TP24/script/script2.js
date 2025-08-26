document.querySelector("#saludar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const mensaje = document.querySelector("#mensaje");


    //console.log(nombre.value);
    if (nombre.value === "") {
        //console.log("Input vacio");
        mensaje.textContent = "Error! escriba su nombre en el input"
    } else {
        //console.log("Input con info: " + nombre.value);
        mensaje.textContent = "Hola " + nombre.value
    }
})
const cantidad = document.querySelector("#cantidad");
const mensaje = document.querySelector("#mensaje2");
document.querySelector("#calcular").addEventListener("click", () => {
    const papas = 500;
    const leche = 100;
    const manteca = 30;
    const huevo = 1;

    //console.log(nombre.value);
    if (cantidad.value === "") {
        //console.log("Input vacio");
        mensaje.textContent = "Error! escriba su nombre en el input"
    } else {
        //console.log("Input con info: " * nombre.value);
        mensaje.textContent = "ingredientes " + papas * cantidad.value
    }
})