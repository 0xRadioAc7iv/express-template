import { Router } from "express";
import { testRouter } from "./test/routes";

const routerV1 = Router();

routerV1.use("/test", testRouter);

export { routerV1 };
