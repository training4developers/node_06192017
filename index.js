'use strict';

function outer() {

  let t = 5;

  setTimeout(function() {
    t = 10;
  }, 2000);

  return function inner() {
    console.log(t);
  };
}
const fn = outer();
fn();
setTimeout(function () { fn(); }, 4000);


