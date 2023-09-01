//Object Literal
const producto = {
    nombre: "TV",
    precio: 500
}

//Object constructor

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto1 = new Producto("Table",500)

console.log(producto1);