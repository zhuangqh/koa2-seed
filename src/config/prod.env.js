import path from 'path';

export default {
  port: 8000,
  static: path.resolve(__dirname, 'public'),
  db: {
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'example',
  },
};
