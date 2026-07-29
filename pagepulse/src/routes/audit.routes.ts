import { Router } from "express";
import { auditUrl } from "../controllers/audit.controller.js";
import { validate } from "../middlewares/validate.js";
import { auditSchema } from "../validators/audit.schema.js";

const router = Router();

router.post("/", validate(auditSchema), auditUrl);

export default router;
