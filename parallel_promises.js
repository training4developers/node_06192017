'use strict';

const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 4000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 1000));
const p3 = new Promise((res, rej) => setTimeout(() => rej('c'), 3000));

p1.then(results => console.log(results));
p2.then(results => console.log(results));
p3.then(results => console.log(results)).catch(() => console.log('p3 rejected'));

function allDone(results) {
  console.log('all done', results);
}

Promise.all([p1,p2,p3])
  .then(results => allDone(results))
  .catch(results => console.log('one failed', results));
