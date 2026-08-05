import rateLimit from "express-rate-limit";

export const auditRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute

  limit: 1000,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    error: {
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many requests. Please try again later.",
    },
  },
});
