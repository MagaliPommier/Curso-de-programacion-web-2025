// Mochila digital

let mochila = ["Lapiz", "cuaderno" , "goma" , "regla" , "colores"];
console.log ("Mochila completa:" , mochila);

// acceder a un item especifico
console.log("El segundo elemento es : " ,  mochila[1]);
mochila[2] = "sacapuntas";
console.log("MOchila actualizada:", mochila);

//Largo del Array
console.log("Tengo" , mochila.length , "materiales en mi mochila.")

//seleccionar ultimo item
console.log("El primer material es:" ,
     mochila [0]);
console.log("El ultimo material es:" ,
     mochila[mochila.length -1]);

     //Agregar y quitar items de un array

     mochila.push("Marcador");
     console.log("Mochila despues de agregar marcador : ",
        mochila);
        
     let itemRemovido = mochila.pop();
     mochila.pop("Mochila despues de quitar el ultimo:" ,
        mochila);
        console.log("Mochila despues de quitar el ultimo:",
            mochila);
            console.log("El material que quite fue:" ,
                itemRemovido);
// vaciar mochila

mochila = [];
console.log("Mi mochila ahora esta vacia:" , 
    mochila);
