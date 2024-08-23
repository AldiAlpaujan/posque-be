import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response-error";
import { ErrorDetail404 } from "../enum/error-detail-404.enum";

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof ZodError){
    res.status(400).json({
      code: 400,
      errorDetail: ErrorDetail404.BAD_MODEL_REQUEST,
      data: error,
    });
  }else if(error instanceof ResponseError){
    res.status(error.number).json({
      code: error.number,
      errorDetail: error.errorDetail404,
      data: error,
    });
  }else{
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
}