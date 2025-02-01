import { RequestHandler } from "express";

const sendGreetingsController: RequestHandler = (request, response) => {
  response.status(200).send({ message: "Hi" });
};

export { sendGreetingsController };
