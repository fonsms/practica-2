
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./Programador');

let temperaturai;
// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);
// creamos un nuevo Programador con las temperaturas que queremos
const programador  = new Programador([
    { hora: "07:00",
      temperatura: 22
    },
    { hora: "08:30",
        temperatura: 18
    },
    { hora: "17:58",
        temperatura: 30
    },
    { hora: "17:59",
        temperatura: 20
    }
]);


// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

//configurar programador:
programador.on('ideal', (temperatura) =>{termostato.indicarTemperaturaIdeal(temperatura);});



// Encender el termostato:
termostato.encender();

