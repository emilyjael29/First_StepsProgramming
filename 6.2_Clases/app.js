/*EJERCICIO PRACTICO SOBRE CLASES*/

//Crear un objeto..
//Esto es Un Objeto
//--
/*let carro1 = {
	marca: 'Toyota',
	tipo: 'Sedan',
	puertas: 4
};*/
//Esto es Una Clase
class Carro {
	constructor (marca1, tipo1, puertas) {
		this.marca = marca1;  //el this.marca hace referencia la propiedad de la clase..
		this.tipo = tipo1;  // lo que esta despues de la igualdas hace referencia al argumento que vamos a recibir
		this.puertas = puertas; 

		this.creadoEn = 'Hoy';
		this.encendido = false;
		this.gasolina = 100;
	}
	/*Metodos*/
	encenderCarro() {
		/*Validar si el carro esta encendido*/
		if (this.encendido) {
			console.error('El carro ya estaba encendido.');
		} else {
			this.encendido = true;
			console.log('El carro esta encendido.')
		}
		return this;
	}
	realizarViaje(consumo) {
		/*Limpiando Codigo*/
		/* ! > indica negacion*/
		if (!this.encendido) return console.log('Carro Esta Apagado')

		if (consumo > this.gasolina) return console.log('No puede realizar el viaje ' + this.gasolina + '%')
		
		/*if (consumo > this.gasolina) {
				console.log('No Puede Realizar el Viaje' + this.gasolina);
		}else {*/
		
		this.gasolina = this.gasolina - consumo;
		return 'Te queda ' + this.gasolina;
		//}


		/*else {
			console.error('El carro esta apagado')
		}*/ /* La L.C con ! me simplifico este 'else' */
		
	}
} // Fin Clase

let carro = new Carro('Chevrolet', 'Corsa', 2);
//console.log(carro1);
console.log(carro);

// Palabra NEW se usa para crear nuevas instancias de los objetos de una clase..
// Metodos son funciones por defecto que podemos agregarle a nuestro carro.. 