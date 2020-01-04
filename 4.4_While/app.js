/* EJERCICIO PRACTICO - CICLO WHILE 
- Supongamos que un taxi tiene su gasolina al 100% */

//Definir variable...

let gasolina = 100;

while ( gasolina > 0 ) {
    //gasolina = gasolina - 1; Se puede hacer tambien asi:
    console.log('Gasolina Restante ' + gasolina);
    gasolina--;
    //Es exactamente lo mismo...
    
};

console.log('Ya no tiene Combustible');