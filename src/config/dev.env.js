import path from 'path';

export default {
  port: 3000,
  static: path.resolve(process.cwd(), 'public'),
  db: {
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'example',
  },
};
