import { Router } from "express";
import { auditUrl } from "../controllers/audit.controller.js";

const router = Router();

router.post("/", auditUrl);

export default router;
