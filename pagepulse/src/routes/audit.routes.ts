import { Router } from "express";
import { auditUrl } from "../controllers/audit.controller.js";
import { validate } from "../middlewares/validate.js";
import { auditSchema } from "../validators/audit.schema.js";
import { auditRateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/", validate(auditSchema), auditRateLimiter, auditUrl);

export default router;
