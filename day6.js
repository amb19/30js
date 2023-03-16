// El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual antes de que cualquier otro código sea ejecutado. Esto significa que las declaraciones de variables y funciones pueden ser utilizadas antes de haber sido declaradas en el código.

console.log(x);
var x = 5;

//Esto significa que cuando se ejecuta el código, el valor de x será undefined en la primera línea, ya que la declaración de x ha sido movida al comienzo del ámbito.

//  coercion es el proceso en el cual JavaScript intenta convertir automáticamente un valor de un tipo a otro, para que puedan ser comparados o operados

console.log(1 == "1")

//l resultado sería verdadero, ya que JavaScript intenta convertir el string “1” en el número 1 antes de compararlos.

//Es importante tener en cuenta estos comportamientos de JavaScript y asegurarse de que los valores estén en el tipo correcto antes de realizar comparaciones u operaciones. Esto puede ser logrado mediante funciones específicas de tipo o usando el operador estricto === en lugar del operador de igualdad ==.