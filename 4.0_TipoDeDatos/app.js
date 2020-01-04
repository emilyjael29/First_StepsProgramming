// Ejemplo practico de tipo de datos...
// Definiendo variables de tipo strings (caracter)...

let nombre = 'Jael';
let apellido = 'Manrique';

//let nombreCompleto = nombre + apellido;

//defecto linea 7 'Los nombres se muestran pegados'
//Para que eso no suceda hacemos lo siguiente:

let nombreCompleto = nombre + ' ' + apellido; //modo correcto

console.log(nombreCompleto);

//Otro ejemplo:

let a = '10';
let b = '20';
console.log( a+b );

// Mostrara como resultado '1020' porque al tener comillas el
//navegador asume que son caracteres o strings.

//Para variables numericas o Number
//Para poder obtener la suma NO DEBE LLEVAR COMILLAS.

let a = 10;
let b = 20;
console.log(a+b);

//Variables de tipo Booleans o Booleanos.

let activo = true;
let despedido = false;
console.log(activo+despedido);

//El resultado es que da un error de Sintaxis.

//NOTA: No son ejercicios reales..

//El operador '+' se usa para concatenar caracteres (linea 14 y 20)
//y tambien para operaciones matematicas (linea 30)
//Los booleanos no se suman, se usan para tomar decisiones.