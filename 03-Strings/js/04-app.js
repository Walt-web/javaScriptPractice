// "Escape de comillas barra invertida \" "
const producto = "Monitor 20 \"";
//Funcion replace; cambiar el valor de un string seleccionando una variable
//Por un valor de la cadena de estring
producto.replace('Monitor', 'TV');
console.log(producto.replace('Monitor', 'TV'));

//Funcion .toUpperCase cambia todo el texto a mayusculas
const hobbies = 'Leer, Escribir, Caminar, Estudiar'.toUpperCase();

//Funcion .split, selecciona una lista de string  y 
//crea una lista con un valor intermedio en comun 
const categorias = hobbies.split(",");
console.log()

//Con document.querySelector selecciona un elemento del DOM 
//.innerHTML cambia un elemento del DOM por otro 
// `{}` Template de String agrega una variable a un string
document.querySelector('p.hashtag').innerHTML =  `CATEGORIAS:  ${categorias}`;
document.querySelector('div>p:nth-child(3)').innerHTML = producto;




