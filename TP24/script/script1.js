document.querySelector("#btnVertical").addEventListener("click", () => {
    console.log("Boton vertical clickeado");
    document.querySelector("#distribucion").style.flexDirection = "column";
});
document.querySelector("#btnHorizontal").addEventListener("click", () => {
    console.log("Boton horizontal clickeado");
    document.querySelector("#distribucion").style.flexDirection = "row";
});
document.querySelector("#btnRojo").addEventListener("click", () => {
    console.log("Boton rojo clickeado");
});
document.querySelector("#btnVerde").addEventListener("click", () => {
    console.log("Boton verde clickeado");
});
let fontsize = 1;
document.querySelector("#btnGrande").addEventListener("click", () => {
    fontsize += 0.1 ;
    console.log("Boton grande clickeado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = "2em" ;
});
document.querySelector("#btnPequeño").addEventListener("click", () => {
    if (fontsize > 2){return}
     if (fontsize < 0.3){return}
    fontsize -= 0.1;
    console.log("Boton pequeño clickeado");
    document.querySelector("#caja2 > span:first-child").style.fontSize =`${fontsize}em`;
    
});
document.querySelector("#colorTexto").addEventListener("change", (e) => {
    console.log("Boton color texto clickeado");
    console.log(e.target.value);
});
document.querySelector("#btnOcultar").addEventListener("click", () => {
    console.log("Boton ocultar clickeado");
});
document.querySelector("#btnMostrar").addEventListener("click", () => {
    console.log("Boton mostrar clickeado");
});