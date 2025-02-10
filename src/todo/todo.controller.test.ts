import supertest from "supertest";
import { app } from "../../index";

describe("getAll", () => {
  it("should get list of servers", async () => {
    await supertest(app).get("/api/server").expect(200);
  });
});
