import { RequestHandler } from "express";

const sendGreetingsController: RequestHandler = (request, response) => {
  response.status(200).send("Hi");
};

export { sendGreetingsController };
