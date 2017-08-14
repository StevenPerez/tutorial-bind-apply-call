// d_ .apply (aplicar)
// b_ Invoca una función pasando como primer argumento this y segundo argumento
// b_ un array que serían los valores de los parámetros de la función.

const Jane = {
	nombre: 'Jane',
	apellido: 'Doe',
	carro: { modelo: 'Volvo' },
};

const John = {
	nombre: 'John',
	apellido: 'Doe',
	carro: { modelo: 'Tesla S3' },
};

function saludar(segundoApellido) {
	console.log('contexto', this, '\n'); // Browser = window | NodeJS = Node / global
	const mensaje = `Hola ${this.nombre} ${this.apellido} ${segundoApellido} \n`;
	console.log(mensaje);
	return mensaje;
}

const saludar2 = (persona, segundoApellido) => {
	this.nombre = persona.nombre;
	this.apellido = persona.apellido;
	console.log('contexto', this, '\n'); // Browser = window | NodeJS = Node / global
	console.log(`Hola ${this.nombre} ${this.apellido} ${segundoApellido} \n`)
}

saludar2(John, 'IV');
