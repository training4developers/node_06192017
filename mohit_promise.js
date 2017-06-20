'use strict';

const p = new Promise((resolve) => {

  console.log('a');
  resolve();

});

p.then(() => console.log('b'));

console.log('c');

setTimeout(() => {
  p.then(() => console.log('d'));
  console.log('e');
}, 3000);
