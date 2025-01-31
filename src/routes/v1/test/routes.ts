import { Router } from "express";
import { sendGreetingsController } from "../../../controllers/testControllers";

const testRouter = Router();

testRouter.get("/", sendGreetingsController);

export { testRouter };
