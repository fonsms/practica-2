
const EventEmitter = require('events');
const later = require('later');
class Programador  extends EventEmitter {

    constructor(arrayconfig) {
        super();
        later.date.localTime();

arrayconfig.forEach(({hora, temperatura})=> {
        const sched = later.parse.text(`at ${hora}`);
        later.setInterval(() =>	{this.emit('ideal', temperatura);
}, sched);
})
}
}
exports = module.exports = Programador;

