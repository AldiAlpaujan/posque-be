import supertest from "supertest";
import { web } from "../src/applications/web";
import { publicApiPaths } from "../src/routes/paths";
import { logResponseBody } from "./test-util";

describe(`POST ${publicApiPaths.register}`, () => {

  it('should reject register new user if request is invalid', async () => {
    const response = await supertest(web).post(publicApiPaths.register).send({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    logResponseBody(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errorDetail).toBeDefined();
    expect(response.body.errorDetail).toBe("bad_model_request");
    expect(response.body.data).toBeDefined();
  });

  it('should register new user', async () => {
    const response = await supertest(web).post(publicApiPaths.register).send({
      name: "test",
      email: "test@app.id",
      phone: "089123123123",
      password: "test123abc",
    });

    logResponseBody(response.body);
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
    expect(response.body.name).toBe("test");
    expect(response.body.email).toBeDefined();
    expect(response.body.email).toBeDefined();
  });

});