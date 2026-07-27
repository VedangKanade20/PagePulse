import { Router } from "express";
import healthRoutes from "./health.routes.js";
import auditRoutes from "./audit.routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/audit", auditRoutes);

export default router;
