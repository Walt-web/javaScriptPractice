const producto = {
    nombre: "Monitor 20\"",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            memoria: "1gh",
            peso: "1kg"
        },
        fabricacion: {
            paisOrigen: "China",
            modelo: "IR1122"
        }
    }
}

console.log(producto.informacion.fabricacion.paisOrigen);