'use strict';

const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const initDb = dbFileName => {

  return new Promise(resolve => {

    fs.access(dbFileName, err => {

      // file does not exist
      if (err) {

        console.log('creating database'.green);

        const db = new sqlite3.Database(dbFileName);
        db.serialize(() => {

          console.log('creating tables'.green);
          db.run('create table widgets (id integer primary key, name text not null, description text, color text, size text, quantity int not null)');

          console.log('creating widget data'.green);
          db.run('insert into widgets (name, description, color, size, quantity) values (\'Red small gear\', \'A red gear that is small.\', \'red\', \'small\', 100)');
          db.run('insert into widgets (name, description, color, size, quantity) values (\'Green large gear\', \'A green gear that is large.\', \'green\', \'large\', 10)');
          db.run('insert into widgets (name, description, color, size, quantity) values (\'Blue tiny gear\', \'A blue gear that is tiny.\', \'blue\', \'tiny\', 45)');
          db.run('insert into widgets (name, description, color, size, quantity) values (\'Saffron medium gear\', \'An saffron gear that is medium.\', \'saffron\', \'medium\', 23)');

          db.close(() => {
            resolve();
          });

        });

      } else {
        console.info('using existing database'.yellow);
        resolve();
      }

    });

  });

};

module.exports = config => {

  return initDb(config.dbFileName);

};
