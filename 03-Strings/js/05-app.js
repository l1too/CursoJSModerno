const producto = "Monitor 40 pulgadas"

console.log(producto)
// Para reemplazar
console.log(producto.replace('pulgadas', '"' ))

console.log(producto.replace('Monitor', 'Monitor curvo' ))

// Para cortar
console.log(producto.slice(10,19))

console.log(producto.slice(7, 2)) // no devuelve nada
//
console.log(producto.substring(10,19))
console.log(producto.substring(7,2)) // lo hace