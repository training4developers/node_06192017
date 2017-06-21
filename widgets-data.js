'use strict';

const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

module.exports = class WidgetsData {

  constructor(dbFileName) {

    this._db = new sqlite3.Database(dbFileName);
    
    this._dbAll = promisify(this._db.all).bind(this._db);
    this._dbGet = promisify(this._db.get).bind(this._db);

    this._dbInsertStmt = this._db.prepare(`
      insert into widgets (name, description, color, size, quantity)
      values (?, ?, ?, ?, ?)
    `);
    this._dbInsertRun =  promisify(this._dbInsertStmt.run).bind(this._dbInsertStmt);

    if (typeof process != 'undefined') {
      process.on('exit', () => {
        console.log('closing database'.magenta);
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

    let { name, description, color, size, quantity } = widget;

    this._dbInsertRun(name, description, color, size, quantity)
      .then(() => Object.assign(widget, { id: this.lastID }));
    this._dbInsertStmt.finalize();
  }

  // TODO - implement replace operation
  // replace(widget) {
  // }

  // TODO - implement delete operation
  // delete(widgetId) {
  // }
};
