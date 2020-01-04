/*EJERCICIO PRACTICO - CICLO FOR
Crear una Tabla de multiplicar

Definir Variables dentro del for

for ( let i = 1; i <= 10; i++ ) {
    let resultado = 2 * i;

    console.log("2 x " + i + " =" + resultado)
}
*/
/*
1- Imprimir la Tabla del 10
2- Limite de la tabla es 20
*/

let base = 10;
let limite =20;

for ( let b = 1; b <= limite; b++ ) {
    let result = base * b;

    console.log(base + " x " + b + " = " + result)
}