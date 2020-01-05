/*EJERCICIO PRACTICO SOBRE Objetos en ARREGLOS */
//Crear 3 objetos 'Personas'

let persona1 = {
	nombre: 'Jael',
	edad: 19,
};

let persona2 = {
	nombre: 'Sinthya',
	edad: 22,
};

let persona3 = {
	nombre: 'Sinai',
	edad: 15,
};

let personas = [persona1, persona2, persona3];

for (let i = 0; i < personas.length; i++) {
	
	//let persona = personas[i]; > Forma Indirecta de Hacerlo
	//Forma Directa:

	console.log(`${personas[i].nombre} -- ${personas[i].edad}`)
}