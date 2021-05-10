const events = require('events');

const eventEmitter = new events.EventEmitter();

const initEventHandler = () => {
  console.log('Init handled');

  eventEmitter.emit('init_event_handled');
};

eventEmitter.on('initiated', initEventHandler);

eventEmitter.on('init_event_handled', () => console.log('Init is done!'));

eventEmitter.emit('initiated');
