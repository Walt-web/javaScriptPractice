const producto = {
    nombre: "TV",
    precio: 300,
    disponible: true,
}
const medidas = {
    peso: "1kg",
    medida: "1m"
}
const producto1 = Object.assign(producto,medidas);
const producto2 = {...producto,...medidas};
//console.log(producto1);
//console.log(producto2);

const marcas = {
    nombre: "Fiat",
    pais: "USA",
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} es del pais: ${this.pais}`);
    }
}

marcas.mostrarInfo();