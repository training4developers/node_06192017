'use strict';

const dns = require('dns');

dns.resolve('google.com', 'MX', (err, records) => {

  console.log(records);

});
