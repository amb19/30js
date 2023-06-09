//tipos de scope (alcance) de variables: global y local.

/*
Las variables declaradas fuera de cualquier función tienen alcance global, lo que significa que pueden ser accedidas y modificadas desde cualquier parte del código. Por otro lado, las variables declaradas dentro de una función tienen alcance local, lo que significa que solo pueden ser accedidas y modificadas dentro de esa función.

Es importante tener en cuenta que cuando se declara una variable con var dentro de una función, esta variable tendrá alcance global, aunque esté dentro de una función. Sin embargo, si se declara con let o const, la variable tendrá alcance local.

Otro concepto importante a entender es el de hoisting, que se refiere al comportamiento de javascript de mover las declaraciones de variables al inicio del ámbito en el que están declaradas. Esto significa que si se declara una variable dentro de una función, javascript la moverá al inicio de la función, incluso antes de que se ejecute cualquier línea de código dentro de la función.

*/

function miFuncion() {
    console.log(x);
    var x = 10;
  }
  
  miFuncion();