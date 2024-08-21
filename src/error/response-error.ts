import { ErrorDetail404 } from "../enum/error-detail-404.enum";

export class ResponseError extends Error{
  constructor(public number: number, public message: string, public errorDetail404?: ErrorDetail404){
    super(message);
  }
}