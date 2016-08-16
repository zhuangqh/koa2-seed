import * as Ctrl from '../controllers/user';

export default {
  get: {
    '/api/user': Ctrl.getName,
  },
};
