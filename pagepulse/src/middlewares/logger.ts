import { Request, Response } from "express";
import { pinoHttp } from "pino-http";
import { logger } from "../config/logger.js";

export const httpLogger = pinoHttp<Request, Response>({
  logger,

  customProps(req) {
    return {
      requestId: req.requestId,
    };
  },
});
