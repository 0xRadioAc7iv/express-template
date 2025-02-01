import { RequestHandler } from "express";

/**
 * Controller to send a greeting message.
 *
 * @param {import("express").Request} request - Express request object
 * @param {import("express").Response} response - Express response object
 * @returns {void} Sends a JSON response with a greeting message
 */
const sendGreetingsController: RequestHandler = (request, response) => {
  response.status(200).send({ message: "Hi" });
};

export { sendGreetingsController };
