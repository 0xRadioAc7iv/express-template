import { RequestHandler } from "express";

const getIndexPage: RequestHandler = (request, response) => {
  response.render("index");
};

export { getIndexPage };
