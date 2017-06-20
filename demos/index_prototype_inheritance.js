'use strict';

// const { getFullName: gfn } = require('./person');

// const person = {
//   id: 1,
//   firstName: 'Bob',
//   lastName: 'Smith',
// };

// console.log(gfn(person));

const rajesh = {
  amt: 4000000,
  address: {
    city: 'Round Rock',
    country: 'Republic of Texas',
  }
};

const param = Object.create(rajesh);
param.amt = 400;
param.address = {
  city: 'Palo Alto'
};
param.address.city = 'Palo Alto';

console.log(param.amt);
delete param.amt;
console.log(param.amt);
console.log(rajesh.address.city);
console.log(param.address.city);

console.dir(param);
