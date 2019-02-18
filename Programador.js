
const EventEmitter = require('events');
const later = require('later');
class Programador  extends EventEmitter {

    constructor(habitacion) {
        super();

        this.habitacion = habitacion;

        // Temperatura ideal programada:
        this.temperaturaIdeal = 16;

        // para cancelar el temporizador setInterval:
        this.intervalId = null;
    }

    indicarTemperaturaIdeal(temperaturaIdeal) {
        this.temperaturaIdeal = temperaturaIdeal;
    }

    encender() {
        console.log('Encendiendo el termostato.');
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => {
            this.emit('tic', this.habitacion.temperatura);

            if (this.habitacion.temperatura > this.temperaturaIdeal+MARGEN_ERROR) {
                this.emit('muchocalor');
            } else if (this.habitacion.temperatura < this.temperaturaIdeal-MARGEN_ERROR) {
                this.emit('muchofrio');
            }
        }, 500);
    }

    apagar() {
        console.log('Apagando el termostato.');
        clearInterval(this.intervalId);
    }
}

exports = module.exports = Programador;

