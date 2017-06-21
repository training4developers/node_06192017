'use strict';

// left hand = right hand
// rest = spread

const doIt = (...params) => {

  console.log(params);
};

doIt(...[1,2,3]);

