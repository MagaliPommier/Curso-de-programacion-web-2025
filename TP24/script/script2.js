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
        mensaje.innerHTML = "ingredientes " + papas * cantidad.value
    }



})
document.querySelector("#listaAsistencias").addEventListener("click", () => {
    const nombre = document.querySelector("#agregar");
    const mensaje = document.querySelector("#ver");
})

let asistentes = [];
document.querySelector("#agregar").addEventListener("click", () => {
    //console.log("boton agregar clickeado");
    const asistente = document.querySelector("#asistente");
    const mensaje = document.querySelector("#listaAsistencias #mensaje");
    if (asistente.value === "") {//mensaje de error

        mensaje.textContent = "Error! Ingrese un nombre en el input";
    } else {//grabo string en array
        asistentes.push(asistente.value);
        mensaje.textContent = "...resouesta"
    }
    asistentes.push(asistente.value);
    asistente.value = "";
})
document.querySelector("#ver").addEventListener("click", () => {
    //console.log("boton ver clickeado");
    const mensaje = document.querySelector("#listaAsistencias #mensaje");
    //mensaje.textContent = asistentes;
    mensaje.textContent = "";
    if (asistentes.lenght === 0) {
        //indicar que no hay datos
        mensaje.textContent = "Error! No hay nombres guardados";
    } else {
        //mpostrar los datos del array
        asistentes.forEach((nombre, i) => {
            //console.log(nombre);
            i++;
            mensaje.innerHTML += `<div>${i} - ${nombre}</div>`;
        });
    }
})


