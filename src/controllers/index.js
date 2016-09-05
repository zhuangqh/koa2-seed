import Router from 'koa-router';
import compose from 'koa-compose';
import userCtrl from './user';

const router = new Router();

userCtrl(router);

export default () => compose([
  router.routes(),
  router.allowedMethods(),
]);