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

let resultado;

resultado = [...carrito, producto]
resultado = [...resultado, producto2]


console.log(resultado)
console.log(carrito)