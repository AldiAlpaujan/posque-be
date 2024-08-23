import { prismaClient } from "../src/applications/database";
import { logger } from "../src/applications/logging";

export const logResponseBody = (body: Object) => {
  for (const key in body) {
    logger.debug(`${key} : ${JSON.stringify(body[key])}`);
  }
}

export class UserTest{

  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        email: "test@app.id"
      }
    });
  }

}