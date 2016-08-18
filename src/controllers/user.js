import userService from '../service/user';

export async function getName(ctx, next) {
  userService.createUser();
  ctx.body = 'hello xiaoming';
}
