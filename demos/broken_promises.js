'use strict';

const rishab = new Promise(function nikhar(resolve, reject) {

  setTimeout(() => {
    resolve('she is madly in love with him because he romatically awesome...');
  }, 2000);

});

rishab.then((results) => {
  console.log(results);
  console.log('yay! she said yes!');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('she found some nice expensive clothing...');
    }, 2000);
  });
  
}).then(results => {

  console.log(results);
  // console.log('working to pay off card');
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('completed work to pay the credit card...');
  //   }, 2000);
  // });
  return 'pay off the credit card';

}).then(results => {

  console.log(results);

  return Promise.reject('women are too expensive');

}).catch((results) => {
  console.log(results);
  console.log('happily... he escaped...');
});

console.log('rishab is waiting...');

