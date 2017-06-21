'use strict';

const EventEmitter = require('events');

class MyOwnClass extends EventEmitter {

}

const moc = new MyOwnClass();

const classEndsEventHandler = data => {
  console.log('all go home', data);
};

moc.on('newListener', (event, cb) => {

  console.log('added event ', event);

});

moc.on('class_ends', classEndsEventHandler);

moc.emit('class_ends', { classSize: 13 });

// moc.removeListener('class_ends', classEndsEventHandler);

moc.emit('class_ends', { classSize: 12 });
