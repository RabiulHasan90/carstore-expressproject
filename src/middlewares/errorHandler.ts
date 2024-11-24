import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: 'An unexpected error occurred',
    success: false,
    error: err.message,
  });
};
