import sha256 from "sha256";
import { prismaClient } from "../applications/database";
import { ErrorDetail404 } from "../enum/error-detail-404.enum";
import { ResponseError } from "../error/response-error";
import { CreateUserRequest, CreateUserResponse } from "../models/user-model";
import { UserValidation } from "../validations/user-validation";
import { Validation } from "../validations/validation";


export class UserService {

  static async register(req: CreateUserRequest): Promise<CreateUserResponse> {
    const registerReq = Validation.validate(UserValidation.REGISTER, req);
    
    const count = await prismaClient.user.count({
      where: {
        email: registerReq.email,
      }
    });

    if(count > 0) {
      throw new ResponseError(400, "Email telah terdaftar", ErrorDetail404.BAD_MESSAGE);
    }

    registerReq.password = sha256(registerReq.password);
    
    const user = await prismaClient.user.create({
      data: {
        name: registerReq.name,
        email: registerReq.email,
        password: registerReq.password,
        phone: registerReq.phone,
        registration_date: new Date(),
      }
    })
     

    return {
      name: user.name,
      email: user.email,
    }
  }

}