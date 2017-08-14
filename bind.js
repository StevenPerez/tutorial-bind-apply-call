const cloneDeep = require('./cloneDeep');

// d_ .bind (enlazar):
// b_ Crea una nueva función con el mismo cuerpo pero con otro contexto

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
	console.log(`Hola ${this.nombre} ${this.apellido} ${segundoApellido} \n`)
}

const saludarAJohn = saludar.bind(cloneDeep(John), 'Yolo');
saludarAJohn();
