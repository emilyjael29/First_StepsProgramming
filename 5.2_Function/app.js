// TAREA PRACTICA SOBRE FUNCIONES...

/*Crear una funcion que me permita determinar la calificacion 
de 3 alumnos
-uno con nota de 100
-uno con nota de 80
-uno con nota de 59
*/

function determinarNota(nota){
   let notaLetra = ''

   if ( nota >= 100 ) {
      notaLetra = 'A'
   } else if ( nota >= 80 ) {
      notaLetra = 'B'
   } else if ( nota >= 59 ) {
      notaLetra = 'F'
   } 
   console.log( nota + ' es igual a ' + notaLetra);
};

determinarNota(100);
determinarNota(80);
determinarNota(59);