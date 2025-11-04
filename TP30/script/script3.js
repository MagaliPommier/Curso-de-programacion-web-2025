document
.querySelector("#btnChiste")
.addEventListener("click", ()=> {
    fetch("http://www.official-joke-api.appspot.com/random_joke")
.then((res)=> res.json())
.then((res)=> {
    mostrarChiste(res);
})
})
function mostrarChiste(chiste){
    console.log(chiste);
    let vista =`<span>${chiste.setup}</span>`;
    document.querySelector("#chiste")
    .innerHTML = vista;
}
//https://catfact.ninja/fact

document
.querySelector("#btnHecho")
.addEventListener("click", ()=> {
    fetch("https://catfact.ninja/fact")
.then((res)=> res.json())
.then((res)=> {
    mostrarHecho(res);
})
})
function mostrarHecho(hecho){
    console.log(hecho);
    let vista =`<span>${hecho.fact}</span>`;
    document.querySelector("#hecho")
    .innerHTML = vista;
}

document
.querySelector("#btnFoto")
.addEventListener("click", ()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=> res.json())
.then((res)=> {
    mostrarFoto(res);
})
})
function mostrarFoto(foto){
    console.log(foto);
    let vista =`<img src="${foto.message}">`;
    document.querySelector("#foto")
    .innerHTML = vista;
}
let click = new Event("click");
document
.querySelector("#btnChiste").dispatchEvent(click);
document
.querySelector("#btnHecho").dispatchEvent(click);
document
.querySelector("#btnFoto").dispatchEvent(click);

https://api.agify.io?name=${nombre}

//https://dog.ceo/


document.querySelector("#btnEdad")
.addEventListener("click", ()=> {
    //primero capturo el nombre del input
    const nombre = document.querySelector("#nombre").value;
    console.log(nombre);
    //validar el dato
    if(nombre === "") {
        alert("No ingreso el nombre para calcular la edad!!!");
        return;
    }
    //construir la url para el fetch con el nombre
    const url = `https://api.agify.io?name=${nombre}`;
    //ejecutar fetch y renderizar resultado

    document.querySelector("#edad").value;
    fetch(`https://api.agify.io?name=${nombre}`)
.then((res)=> res.json())
.then((res)=> {
    mostrarEdad(res);
})
})
 function mostrarEdad(edad) {
    console.log(edad);
    let vista =`<span>La edad estimada para ${edad.name} es ${edad.age} años</span>`;
    document.querySelector("#edad")
    .innerHTML = vista;
}