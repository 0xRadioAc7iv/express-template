import { createLogger, format, transports } from "winston";
import { LOGGING_DIRECTORY } from "../config";

const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ timestamp, level, message, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    logFormat
  ),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat
      ),
    }),
    new transports.File({
      filename: `${LOGGING_DIRECTORY}error.log`,
      level: "error",
    }),
    new transports.File({ filename: `${LOGGING_DIRECTORY}combined.log` }),
  ],
});

export default logger;
