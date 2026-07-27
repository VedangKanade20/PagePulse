import { Request, Response, NextFunction } from "express";
import { auditService } from "../services/audit.service.js";

export const auditUrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await auditService(req.body.url);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
