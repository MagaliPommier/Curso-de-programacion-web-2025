document.querySelector("#registrar").addEventListener("click", () => {
    console.log("Click a registrar");
    // 1 Capturar los datos del usuario
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const telefono = document.querySelector("#telefono");
    //console.log(nombre.value, apellido.value, telefono.value);

    //validar los datos
    if (nombre.value === "" || apellido.value === "" || telefono.value === "") {
        console.log("Completar todos los input")
        mostrarError("Debe completar los tres campos de input para poder registrar la ficha");
        return;
    }
    let datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value
    }
    //console.log(datos);


    fichas.push(datos);
    console.log(fichas);

    nombre.value = "";
    apellido.value = "";
    telefono.value = "";

    document.querySelector("#vista h2").innerHTML = `Registros <span>${fichas.length}</span>`

    console.log("Finaliza la funcion");
});
let fichas = [];
function mostrarError(txt) {
    const divErrores = document.querySelector("#errores");
    divErrores.textContent = txt;
    divErrores.style.display = "flex";
    setTimeout(() => {
        divErrores.style.display = "none";

    }, 1000 * 3);

}
document.querySelector("#mostrar").addEventListener("click", () => {
    //console.log("click al boton mostrar");
    if (fichas.length === 0) {
        mostrarError("No hay registros para mostrar");
        return;
    }
    fichas.forEach((objeto) => {
        document.querySelector("#salida").innerHTML +=  `<div class="ficha">
                <span>Nombre: ${objeto.nombre}</span>
                <span>Apellido: ${objeto.apellido}</span>
                <span>Telefono: ${objeto.telefono}</span>
            </div>`;
    });
})