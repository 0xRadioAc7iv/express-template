import { Router } from "express";
import { sendGreetingsController } from "../../../controllers/testControllers";

const testRouter = Router();

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Sends a greeting message
 *     description: Returns a simple greeting message.
 *     responses:
 *       200:
 *         description: Successful response with a greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hi"
 */
testRouter.get("/", sendGreetingsController);

export { testRouter };
