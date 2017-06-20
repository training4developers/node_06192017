'use strict';

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

module.exports = {

  getPerson: id => {

    return readFile('./data.json', 'utf8')
      .then(data => JSON.parse(data))
      .then(people => people.filter(p => p.id === id)[0]);

  },

  savePerson: person => {

    return readFile('./data.json', 'utf8')
      .then(data => {
        const people = JSON.parse(data);
        person.id = people.length + 1;
        people.push(person);

        return writeFile('./data.json', JSON.stringify(people), 'utf8');
      });
  }

};
