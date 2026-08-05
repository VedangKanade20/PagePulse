import { Request, Response, NextFunction } from "express";
import { Semaphore } from "../utils/semaphore.js";

const semaphore = new Semaphore(10);

export const concurrencyLimiter = async (
  req: Request,

  res: Response,

  next: NextFunction,
) => {
  await semaphore.acquire();

  res.on("finish", () => {
    semaphore.release();
  });

  next();
};
