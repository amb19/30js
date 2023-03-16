//Tipos de datos
//null tipo de dato que representa un valor vacío o nulo
const nombre = null;
console.log(nombre); // imprime "null

//Undefined dato que representa un valor que aún no ha sido asignado o que no tiene un valor válido

let nombre;
console.log(nombre); // imprime "undefined"

let gatito = {
    nombre: "Michi",
    edad: 3,
    dueño: null
  };
  
  console.log(gatito.dueño);

let gato;
console.log(gato);

//Symbol dato único en JavaScript que se utiliza para crear identificadores únicos

const simbolo = Symbol();

let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único"
};

console.log(perrito[simbolo]); // "Identificador único"

//BigInt se usa para representar números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa,solo pueden ser usados para operaciones matemáticas y no pueden ser usados con operadores de comparación

const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); //  411218936707805260n