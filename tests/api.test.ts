import { Server } from "http";
import request from "supertest";
import serverPromise from "../src/index";

let server: Server;

beforeAll(async () => {
  server = await serverPromise;
});

afterAll((done) => {
  server.close(done);
});

describe("Express API Tests", () => {
  it("should return a list of users", async () => {
    const response = await request(server).get("/api/v1/test");
    const message: string = response.body.message;

    expect(response.status).toBe(200);
    expect(message).toBe("Hi");
    expect(message.length).toBe(2);
  });
});
