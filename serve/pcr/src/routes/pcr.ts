import { Router, Request, Response, NextFunction } from 'express';
import { Result } from '../models';
import { getCharaList, getGvgTask, updateTask, deleteTask } from '../logic/pcr';
import { wrapHandler } from '../utils/wrap';

export const pcrRouter = Router({
  strict: true,
});

pcrRouter.get('/charaList', async (req: Request, res: Response) => {
  const charaList = await getCharaList();
  res.send(Result.success(charaList));
});

pcrRouter.get(
  '/gvgTask',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query;
      const charaList = await getGvgTask(+query.stage);
      res.send(Result.success(charaList));
    } catch (error) {
      next(error);
    }
  },
);

pcrRouter.post(
  '/updateGvgTask',
  wrapHandler(async (req, res, next) => {
    const body = req.body;
    const r = await updateTask(body);
    res.send(Result.success(r));
  }),
);

pcrRouter.delete(
  '/deleteTask',
  wrapHandler(async (req, res, next) => {
    const { id } = req.query;
    const r = await deleteTask(id);
    res.send(Result.success(r));
  }),
);
