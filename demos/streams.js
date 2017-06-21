'use strict';

const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

const input = fs.createReadStream('./config.json');
const output = fs.createWriteStream('./test.txt.gz');

//input.pipe(gzip).pipe(output);

// input.on('data', data => {
//   console.log(data.toString('utf8'));
// });

gzip.pipe(output);
gzip.write('Dell computers are the best in the world!');
output.close();
