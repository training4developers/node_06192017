'use strict';

const fs = require('fs');
const util = require('util');

// const promisify = asyncFn => {
//   return (...params) => {
//     return new Promise((resolve, reject) => {
//       params.push((err, ...data) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(data.length === 1 ? data[0] : data);
//       });
//       asyncFn(...params);
//     });
//   };
// };

const readFile = util.promisify(fs.readFile);

const getConfig = () => {

  if (!getConfig._p) {
    console.log('reading the config file');
    getConfig._p = readFile('./config.json', 'utf8')
      .then(data => JSON.parse(data));
  }

  return getConfig._p;
};

const logger = msg => {

  getConfig().then(config => {

    fs.writeFile(config.logfile, msg, 'utf8', (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });

  });

};

logger('hope this works!!');
logger('hope this works!!');


