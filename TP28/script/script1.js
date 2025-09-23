localStorage.setItem("curso" , "programacion web");
const curso = localStorage.getItem("curso");
console.log(curso);

document.querySelector("#grabar").addEventListener("click", () => {
    //console.log("Click a grabar");
     const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
//leer los campos
//invalidar campos vacios con un return
 if(nombre.value === "" || apellido.value === "") {
        console.error("inputs invalidos");
        return;
    }
//crear objeto con propiedad nombre y apellido
 const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
    }
    
//mostrar objeto por consola
console.log(datos)
//guardar en LS
localStorage.setItem("datos", JSON.stringify(datos));
})

document.querySelector("#leer").addEventListener("click", () => {
    let datosLS = localStorage.getItem("datos");
    //console.log(datosLS);
   datosLS = JSON.parse(datosLS);
    })
