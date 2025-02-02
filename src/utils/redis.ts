import { createClient } from "redis";
import {
  REDIS_PASSWORD,
  REDIS_SOCKET_HOST,
  REDIS_SOCKET_PORT,
} from "../config";

const redisClient = createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: REDIS_SOCKET_HOST,
    port: REDIS_SOCKET_PORT,
  },
});

export default redisClient;
