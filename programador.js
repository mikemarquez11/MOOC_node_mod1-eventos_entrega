//const EventEmitter = require('events');
const EventEmitter = require('./events'); // Tarea 2

// Importar modulo Later.js:
const later = require('later');

// Class Programador
class Programador extends EventEmitter { // Tarea 1

    constructor(configuracion) {
        super();

        // set later to use local time
        later.date.localTime();

        configuracion.forEach((programa, i) => {
            later.setInterval(() => {
                this.emit('ideal', programa.temperatura);
                console.log(`Programa nº ${i}: Modificando temperatura ideal a ${programa.temperatura} ºC`);
            }, later.parse.text(`at ${programa.hora}`));
        });
    }
}

exports = module.exports = Programador;
