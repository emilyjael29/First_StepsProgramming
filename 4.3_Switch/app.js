/* EJERCICIO DE LA ESTRUCTURA CONDICIONAL SWITCH */

//Definir Variables.

let dia = 5; // 1- Lunes, 2- Martes ... //Cambiar valor..
             // Domingo = 0

switch ( dia ) {
    case 0:
        console.log('Es Domingo');
        break;
    case 1: 
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3: 
        console.log('Es Miercoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    case 6:
        concole.log('Es Sabado');
        break;
    default:
        console.log('El Dia que usted Ingreso no es Valido.');
} 