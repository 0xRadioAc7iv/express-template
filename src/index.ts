import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import router from "./routes";
import { handleErrors } from "./middlewares/errorHandler";
import { limiter } from "./middlewares/rateLimiter";
import { loggingMiddleware } from "./middlewares/logger";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./utils/swagger";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(limiter);
app.use(compression());
app.use(loggingMiddleware);

// Routes
app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Handles non-existing routes & methods
app.all("*", (req, res) => {
  res.sendStatus(405);
});

// Error Handling Middleware
app.use(handleErrors);

const server = app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening at PORT 3000");
});

export default server;
