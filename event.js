const events = require('events');
const event = new events.EventEmitter();
const event_alpha = function(a1,a2){
    console.log(a1*a2-a1)
}
event.on('Xyzclick',event_alpha)
event.emit('Xyzclick',2,4)