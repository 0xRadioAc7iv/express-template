import { Router } from "express";
import { sendGreetingsController } from "../../../controllers/testControllers";
import { getIndexPage } from "../../../controllers/views";

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

/**
 * @swagger
 * /test/view:
 *   get:
 *     summary: Get Index Page
 *     description: Retrieves the index page content.
 *     tags:
 *       - Test
 *     responses:
 *       200:
 *         description: Successfully retrieved the index page.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Index page content"
 *       500:
 *         description: Internal server error
 */
testRouter.get("/view", getIndexPage);

export { testRouter };
