import path from "path";
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
import redisClient from "./utils/redis";

const app = express();

// Set View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

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

const serverPromise = (async () => {
  try {
    await redisClient.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Error connecting to Redis:", error);
    process.exit(1);
  }

  const server = app.listen(3000, () => {
    console.log("Server is listening at PORT 3000");
  });

  return server;
})();

export default serverPromise;
