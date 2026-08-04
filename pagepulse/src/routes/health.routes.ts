// import { Router } from "express";

// const router = Router();

// router.get("/", (_, res) => {
//   res.status(200).json({
//     success: true,
//     message: "PagePulse API is healthy",
//   });
// });

// export default router;

import { Router } from "express";
import { redisClient } from "../config/redis.js";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    status: "UP",

    redis: redisClient.isReady ? "Connected" : "Disconnected",

    uptime: process.uptime(),

    memory: process.memoryUsage(),

    node: process.version,

    environment: process.env.NODE_ENV,

    timestamp: new Date().toISOString(),
  });
});

export default router;
