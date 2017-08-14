// d_ .call (llamar)
// b_ Invoca una función pasando como primer argumento this y el resto de los
// b_ argumentos serían los valores de los parámetros de la función.

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

function saludar(segundoApellido, otro) {
	console.log('contexto', this, '\n'); // Browser = window | NodeJS = Node / global
	const mensaje = `Hola ${this.nombre} ${this.apellido} ${segundoApellido} ${otro}\n`;
	console.log(mensaje);
	return mensaje;
}

saludar.call(John, 'V', 'Yolo')
