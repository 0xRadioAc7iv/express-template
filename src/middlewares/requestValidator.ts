import { Request, Response, NextFunction } from "express";
import { ValidationResult } from "joi";
import { ValidationSchemas } from "../lib/interfaces";

export const validateRequest = (schemas: ValidationSchemas) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationErrors: Record<string, string> = {};

    if (schemas.body) {
      const { error }: ValidationResult = schemas.body.validate(req.body);

      if (error) {
        validationErrors.body = error.details
          .map((err) => err.message)
          .join(", ");
      }
    }

    if (schemas.query) {
      const { error }: ValidationResult = schemas.query.validate(req.query, {
        abortEarly: false,
      });

      if (error) {
        validationErrors.query = error.details
          .map((err) => err.message)
          .join(", ");
      }
    }

    if (schemas.params) {
      const { error }: ValidationResult = schemas.params.validate(req.params, {
        abortEarly: false,
      });
      if (error) {
        validationErrors.params = error.details
          .map((err) => err.message)
          .join(", ");
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    next();
  };
};
