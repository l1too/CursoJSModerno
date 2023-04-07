const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

// console.log(producto.nombre)
// // Manera antigua
// const nombre1 = producto.nombre

// console.log(nombre)

// Nueva manera: OBJECT DESTRUCTURING

// const {nombre} = producto
// const { precio } = producto

const { nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)
