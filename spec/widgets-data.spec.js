'use strict';

const resolved = require('path').resolve('../node_modules/sqlite3/lib/sqlite3.js');
require.cache[resolved] = {
  id: resolved,
  filename: resolved,
  loaded: true,
  exports: {
    // create a mock object
    Database: function() { console.log('mocked'); }
  },
};
