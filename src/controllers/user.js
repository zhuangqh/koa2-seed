import userService from '../service/user';

export async function getName(ctx) {
  userService.createUser();
  ctx.body = 'hello xiaoming';
}

export default function userCtrl(router) {
  router.get('/api/user', getName);
};
