import { Request, Response, NextFunction } from "express";
import HttpError from "@shared/errors/http-error";

function errorHandlerMiddleware(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  if (error instanceof HttpError) {
    return response.status(error.statusCode).send({
      message: error.message,
      errors: error.errors,
    });
  }
  return response.status(500).send({
    status: "error",
    message: `Internal server error - ${error.message}`,
  });
}

export default errorHandlerMiddleware;
