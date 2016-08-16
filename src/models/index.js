import mongoose from 'mongoose';
import config from './config';

import userSchema from './bus';

mongoose.connect(`mongodb://${config.db.host}/${config.db.database}`);

const user = mongoose.model('user', userSchema);

export default {
  user,
};
