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
    
    // cek email apakah telah terdaftar
    const count = await prismaClient.user.count({
      where: {
        email: registerReq.email,
      }
    });

    if(count > 0) {
      throw new ResponseError(400, "Email telah terdaftar", ErrorDetail404.BAD_MESSAGE);
    }

    // encrypt password dengan sha256 jika email dapat didaftarkan


    // masukan data ke database

    return {
      name: "",
      email: "",
    }
  }

}