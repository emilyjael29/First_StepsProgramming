/*EJERCICIO PRACTICO - SEPARANDO CODIGO EN FUNCIONES
Crear una Tabla de multiplicar
*/

function tablaMultiplicar(base, limite) {
	/*No definir variables dentro de las funciones
	-se definen en parametros y al ser llamada la funcion los 
	valores se les asugnan en los argumentos*/
	for ( let b = 1; b <= limite; b++ ) {
    let result = base * b;

    console.log(base + " x " + b + " = " + result)
	}	
}

tablaMultiplicar(5, 10);
/*Este metodo hace que la funcion sea reusable y podamos 
usarla tantas veces queramos*/
tablaMultiplicar(3, 10);