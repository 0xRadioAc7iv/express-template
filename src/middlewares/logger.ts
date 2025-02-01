// loggingMiddleware.ts
import { Request, Response, NextFunction } from "express";
import logger from "../utils/logging";

export function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const startHrTime = process.hrtime();

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;

    const message = `${req.method} ${req.originalUrl} ${
      res.statusCode
    } ${elapsedTimeInMs.toFixed(3)} ms`;

    if (res.statusCode >= 500) {
      logger.error(message);
    } else if (res.statusCode >= 400) {
      logger.warn(message);
    } else {
      logger.info(message);
    }
  });

  next();
}
