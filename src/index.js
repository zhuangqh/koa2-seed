'use strict';

import Koa from 'koa';
import config from './config';
import router from './routers';

const app = new Koa();

// 捕获未处理reject错误
// let serverStarted = false;
// process.on('unhandledRejection', (reason, p) => {
//   util.logger.error("Catch Rejection :", reason, p);
//   if (!serverStarted) {
//     // 如果服务器还没完成初始化则直接退出
//     process.exit(1);
//   }
// });

async function init() {
  app.use(router());

  app.on('error', (err, ctx) => {
    console.log(err);
    ctx.response.status = 500;
  });

  app.listen(config.port, () => {
    console.log(`server started on port ${config.port}`);
  });
}

init();

export default app;
