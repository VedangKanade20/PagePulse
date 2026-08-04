import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

// import healthRoutes from "./routes/health.routes.js";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { requestId } from "./middlewares/requestId.js";
import { httpLogger } from "./middlewares/logger.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(express.json());

app.use(requestId);

app.use(httpLogger);

// app.use(morgan("dev"));

// app.use("/health", healthRoutes);

app.use("/api", routes);
app.use(errorHandler);

export default app;
