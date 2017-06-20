'use strict';

const fs = require('fs');

fs.readFile('./config.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const config = JSON.parse(data);
  console.log(config.logfile);
});

readFile('./config.json', 'utf8').then(data => console.log(data));

// fs.writeFile(config.logfile, 'first log entry', 'utf8', (err) => {

//   if (err) {
//     console.log(err);
//     return;
//   }

// });
