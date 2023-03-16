// Variables que pueden cambiar con el tiempo
var edad = 30  //ya no se usa
let hora = 12 

// Constante que no pueden cambiar
const nombre = "javascript"

// Declaración
var edad
let hora

// Inicialización
edad = 30
hora = 12

// Declaración & inicialización
const name = "javascript"

function miFuncion(parametro1, parametro2) {
    // Código de la función
  }

  // llamar a una funcion 
  miFuncion(valor1, valor2);

  function suma(a, b) {
    return a + b; 
    /*
    // Las funciones también pueden devolver un valor como resultado usando la palabra clave return. El valor devuelto se puede asignar a una variable o utilizar en una expresión.
|   */
  }
  
  let resultado = suma(2, 3);
  console.log(resultado); // Imprime 5

//3 forma de llamar a una funciones
// 1 IIFE (Immediately Invoked Function Expression) // se autoejecuta inmediatamente después de ser definida.es anónima y no se puede reutilizar.

(function () {
    console.log("Soy una IIFE"); 
  })();

//2 Función expresión: se define como una expresión y puede ser asignada a una variable. también puede ser llamada y reutilizada
let saluda = function () {
    console.log("Hola");
  };
  
  saluda();

 //3 Arrow function: se define utilizando la sintaxis () =>. es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.
 
 let saluda = () => console.log("Hola");

saluda();

//Sintaxis básica
//Punto y coma ; es totalmente opcional, a excepción de algunos casos especiales como en ciclos o cuando se quiere separar declaraciones en una misma línea.

const saludo = "Hola"
console.log(saludo)
const saludo = "Hola";
console.log(saludo);
 
//Corchetes o llaves {} se utilizan para encapsular bloques de código, funciones, bucles y otros elementos en JavaScript. También se utilizan para declarar objetos
const carro = {
    color: "rojo",
    llantas: 4,
    marca: "Audi"
  }