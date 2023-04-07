"use strict"
// use strict evita q se escriba codigo mal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}
// freeze no deja modidificar agrgar ni eliminar propiedades
Object.freeze(producto)

// producto.img = "imagen.jgp"
// producto.disponible = false

console.log(producto)

console.log(Object.isFrozen(producto))