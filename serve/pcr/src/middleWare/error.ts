import { Request, Response, NextFunction } from 'express';
import { ResultStatus } from '../models';

export const errorMid = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.log(err.message, 'err mid');
  res.status(ResultStatus.error).send(err.message);
};
