//EJEMPLO PRACTICO DE ESTRUTURAS DE CONTROL 'IF'
// -> Crear un algoritmo que basado en la nota imprima si el alumno aprueba la materia! (Aprueba con 60pts)
//Si el alumno tiene nota menor a 50, imprimir un mensaje que diga:
//"Por favor, Estudie mas"

let nota = 50;

if ( nota >= 60) {
    console.log('Aprobaste ¡Felicidades!')
} else if ( nota < 50) {
    console.log('Por favor, Estudie mas!')
} else{
    console.log('El alumno no Aprobó.')
}
console.log( 'Fin del Programa' );