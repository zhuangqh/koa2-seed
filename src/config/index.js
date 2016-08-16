import dev from './dev.env';
import prod from './prod.env';

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
