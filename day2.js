// tipo de datos
//Numbers
let edad = 30;
let salario = 1500.50;
const PI = 3.14;
const numeroGrande = 1e6; // 1 millón
const numeroPequeño = 1e-6; // 0.000001

//Strings Las cadenas de texto
const nombre = "Jose";
const apellido = 'Maldonado';
console.log("Hola, " + nombre + " " + apellido + "!"); // "Hola, Jose Maldonado!"
console.log(`Hola, ${nombre} ${apellido}!`); // "Hola, Jose Maldonado! 

//métodos para manipular strings
length: Devuelve la longitud de un string.
toUpperCase(): Devuelve el string en mayúsculas.
toLowerCase(): Devuelve el string en minúsculas.
substring(): Devuelve una parte del string.

const nombre = "jose";
console.log(nombre.length) // 4
console.log(nombre.toUpperCase()) // jose
console.log(nombre.toLowerCase()) // jose
console.log(nombre.substring(0, 2)) // jos

/*ojectos estructuras de datos que nos permiten almacenar un conjunto de pares clave-valor. Estos pares son conocidos como propiedades del objeto.
Para crear un objeto, debemos utilizar las llaves {} y especificar las propiedades del objeto mediante la sintaxis nombrePropiedad: valorPropiedad. Los valores de las propiedades pueden ser de cualquier tipo de dato, incluyendo otros objetos.
*/

const persona = {
    nombre: "Jose",
    edad: 40,
      cursoFavorito: {
          nombre: "Básico de JavaScript",
          clases: 2,
          duración: "2 horas"
      }
  };

  console.log(persona.nombre); // "jose"
  console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
  console.log(persona["edad"]); // 40

//Booleanos
let cursoCompletado = true;
let lecturaCompletada = false;

//Js existe la instrucción typeof la cual te dirá el nombre del tipo de dato con el que estás trabajando
typeof "#nombre" // "string"
typeof 30 // number
typeof true // boolean
typeof {} // "object"

// con los arrays nos devuelve que son un objeto
typeof [] // "object"
