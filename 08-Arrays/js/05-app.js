const carrito = []

// Definir producto

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 300
}

const producto2 = {
    nombre: "Celular",
    precio: 100
}

const producto3 ={
    nombre: "teclado",
    precio: 600
}

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)

console.log(carrito)