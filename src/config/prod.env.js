const path = require('path');

module.exports = {
  port: 8000,
  static: path.resolve(__dirname, 'public'),
  db: {
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'example',
    port: 27017,
  },
  log: {
    appenders: [
      {
        type: 'console',
      },
      {
        type: 'dateFile',
        filename: 'logs/error',
        pattern: '-MM-dd.log',
        alwaysIncludePattern: true,
        category: 'error',
      },
      {
        type: 'dateFile',
        filename: 'logs/debug',
        pattern: '-MM-dd.log',
        alwaysIncludePattern: true,
        category: 'debug',
      },
    ],
    levels: {
      error: 'ALL',
    },
  },
};
