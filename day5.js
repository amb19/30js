//Operadores
//Operadores aritméticos
// Suma
console.log(1 + 2); // 3

// Resta
console.log(5 - 2); // 3

// Multiplicación
console.log(3 * 4); // 12

// División
console.log(10 / 2); // 5

// Módulo (devuelve el resto de una división)
console.log(10 % 3); // 1

//Operadores de asignación
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

//Operadores de comparación

console.log(1 < 2); // true
console.log(2 > 1); // true
console.log(1 <= 2); // true
console.log(2 >= 1); // true
console.log(1 !== 2); // true

/*Entre estos existen 2 operadores de igualdad los cuales son: == y ===   El primero realiza una comparación de valor y el segundo, además de comparar el valor, también verifica el tipo de dato. Es recomendable utilizar siempre === */

console.log(1 == "1") // true
console.log(1 === "1") // false

//Operadores lógicos

//AND (&&): Este operador lógico evalúa si ambas expresiones son verdaderas,Si ambas expresiones son verdaderas, devuelve true, de lo contrario, devuelve false.

let edad = 25;
let mayorDeEdad = edad >= 18;

if (edad >= 18 && mayorDeEdad) {
  console.log("Eres mayor de edad");
} else {
  console.log("Aún eres menor de edad");
}

//OR (||): Este operador lógico evalúa si al menos una de las expresiones es verdadera. Si al menos una de las expresiones es verdadera, devuelve true, de lo contrario, devuelve false

let edad = 25;
let tieneIdentificacion = true;

if (edad >= 18 || tieneIdentificacion) {
  console.log("Puedes entrar al bar");
} else {
  console.log("No tienes la edad o la identificación suficiente para entrar al bar");
}

// NOT (!): Este operador lógico invierte el valor de la expresión. Si la expresión es verdadera, devuelve false, de lo contrario, devuelve true.

let esFinDeSemana = true;

if (!esFinDeSemana) {
  console.log("A trabajar");
} else {
  console.log("A disfrutar del fin de semana");
}