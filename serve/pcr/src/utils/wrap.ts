import { NextFunction, Handler, Request, Response } from 'express';

export function wrapAsync<T>(fn: any) {
  return async (...args): Promise<[T, Error]> => {
    try {
      return [await fn.apply(this, args), null];
    } catch (error) {
      return [null, error];
    }
  };
}

export function wrapHandler(fn): Handler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
