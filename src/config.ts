import env from "env-var";
import { configDotenv } from "dotenv";

configDotenv();

export const REDIS_PASSWORD = env.get("REDIS_PASSWORD").required().asString();

export const REDIS_SOCKET_HOST = env
  .get("REDIS_SOCKET_HOST")
  .required()
  .asString();

export const REDIS_SOCKET_PORT = env
  .get("REDIS_SOCKET_PORT")
  .required()
  .asInt();

export const LOGGING_DIRECTORY = "./logs/";
