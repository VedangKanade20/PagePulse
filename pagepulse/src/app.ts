import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

// import healthRoutes from "./routes/health.routes.js";
import routes from "./routes/index.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(express.json());

app.use(morgan("dev"));

// app.use("/health", healthRoutes);

app.use("/api", routes);

export default app;
