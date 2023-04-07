"use strict"
// use strict evita q se escriba codigo mal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}
// Seal permite modificar propiedades ya existentes pero no eliminar ni agregar
Object.seal(producto)

// producto.img = "imagen.jgp"
// producto.disponible = false

console.log(producto)

console.log(Object.isSealed(producto))