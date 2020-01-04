// EJERCICIO DE IF ELSE ANIDADO EN JAVASCRIPT...

/* 
    Cree un algoritmo que permita determinar
    la calificacion de un alumno

    Si la nota se encuentra entre 100 a 90 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota es inferior a 60 = F
*/

//Definir Variables

let nota = 85; // Cambiar valores para ver los resultados!
let notaLetra = '';

if ( nota >= 90 ) {
    notaLetra = 'A'
} else if ( nota >= 80 ) {
    notaLetra = 'B'
} else if ( nota >= 70 ) {
    notaLetra = 'C'
} else if ( nota >= 60 ) {
    notaLetra = 'D'
} else {
    notaLetra = 'F'    
};

console.log( nota + ' es igual a ' + notaLetra);