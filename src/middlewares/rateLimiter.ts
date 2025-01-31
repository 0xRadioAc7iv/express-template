import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 1000 * 60,
  limit: 100,
  standardHeaders: true,
  skipFailedRequests: true,
});
