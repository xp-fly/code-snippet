const EventEmitter = require('./index');

const eventEmitter = new EventEmitter();

eventEmitter.on('a', (val) => console.log('event a', val));

eventEmitter.emit('a', 'hello');