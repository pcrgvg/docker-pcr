import express from 'express';

import { PreMiddleWares, SufixMiddleWares } from './middleWare';
import { Result } from './models';
import { testRouter, userRouter, qqRouter, pcrRouter } from './routes';

export const app = express();

const rootRouter = express.Router({ strict: true });

PreMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
app.get('/', (req, res) => {
  res.send(Result.success('链接成功'));
});
app.use('/meqq', qqRouter);
rootRouter.use('/test', testRouter);
rootRouter.use('/user', userRouter);
rootRouter.use('/pcr', pcrRouter);
app.use('/api', rootRouter);

SufixMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
