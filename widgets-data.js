'use strict';

const sqlite3 = require('sqlite3');
const { promisify } = require('util');

module.exports = class WidgetsData {

  constructor(dbFileName) {

    this._db = new sqlite3.Database(dbFileName);
    
    this._dbAll = promisify(this._db.all).bind(this._db);
    this._dbGet = promisify(this._db.get).bind(this._db);

    this._insertSQL = `
      insert into widgets (name, description, color, size, quantity)
      values (?, ?, ?, ?, ?)
    `;

    if (typeof process != 'undefined') {
      process.on('exit', () => {
        console.log(`closing database on worker ${process.pid}`.magenta);
        this._db.close();
      });
    }
  }

  all() {
    return this._dbAll('select * from widgets');
  }

  one(widgetId) {
    return this._dbGet('select * from widgets where id = ?', [ widgetId ]);
  }

  insert(widget) {

    const { name, description, color, size, quantity } = widget;
    const dbInsertStmt = this._db.prepare(this._insertSQL);

    const insertPromise = new Promise( (resolve, reject) =>
      dbInsertStmt.run(name, description, color, size, quantity, function(err) {

        if (err) {
          reject(err);
          return;
        }

        resolve(Object.assign(widget, { id: this.lastID }));

      }));

    dbInsertStmt.finalize();

    return insertPromise;
  }

  // TODO - implement replace operation
  // replace(widget) {
  // }

  // TODO - implement delete operation
  // delete(widgetId) {
  // }
};
