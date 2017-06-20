'use strict';

let counter = 0;

counter++;
setTimeout(() => {
  console.log('a');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 0);

function allDone() {
  console.log('all done');
}

counter++;
setTimeout(() => {
  console.log('b');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 0);

counter++;
setTimeout(() => {
  console.log('c');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 0);


