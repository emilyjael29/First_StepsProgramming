/*EJERCICIO PRACTICO SOBRE LOS OBJETOS */
//2. las funciones se definen al inicio (`)
function describirPersona( p ) {
console.log(`${p.nombre} tiene una edad ${p.edad} y mide ${p.estatura}`)
}

//Se define una variable comun y corriente..
let personas = {  //< Las llaves en JavaScript indicanque la variable es un objeto.
    nombre:'Jael', //No se termina con ';' sino com comas ','..
    edad:18,
    estatura: 1.45 //Cuando son numeros no se colocan comillas.. 
}
//console.log(personas); //Para llamar a un atributo del objeto se coloca 'objeto.atributo'
//Podemos crear una funcion para que me describa al objeto
//Llamamos la funcion
describirPersona(personas);
