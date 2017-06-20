'use strict';

const { getPerson, savePerson } = require('./person');

getPerson(1).then(person => console.log(person));
savePerson({
  firstName: 'Tim',
  lastName: 'Rollins'
}).then(() => console.log('person saved'));
