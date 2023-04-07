// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

// Object constructor

function Producto(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        this.disponible = true
}

const producto2 = new Producto('Tablet de 15 pulgadas ', 15000)

console.log(producto2)