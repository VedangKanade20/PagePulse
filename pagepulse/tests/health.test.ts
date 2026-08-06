import request from "supertest";
import app from "../src/app.js";
import { describe, expect, it } from "vitest";

describe("Health Check", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);

    expect(response.body.status).toBe("UP");
  });
});
