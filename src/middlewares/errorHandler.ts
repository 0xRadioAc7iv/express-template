import { ErrorRequestHandler } from "express";
import { CustomError } from "../lib/errors";

export const handleErrors: ErrorRequestHandler = (error, _req, res) => {
  console.error(error);

  const statusCode = error instanceof CustomError ? error.statusCode : 500;
  res.status(statusCode).json({
    error: error.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
