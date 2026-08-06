import request from "supertest";
import app from "../src/app.js";
import { describe, expect, it } from "vitest";

describe("Audit API", () => {
  it("should reject invalid URL", async () => {
    const response = await request(app)
      .post("/api/audit")

      .send({
        url: "hello",
      });

    expect(response.status).toBe(400);
  });

  it("should audit valid URL", async () => {
    const response = await request(app)
      .post("/api/audit")

      .send({
        url: "https://google.com",
      });

    expect(response.status).toBe(200);

    expect(response.body.success).toBe(true);
  });

  it("should rate limit", async () => {
    for (let i = 0; i < 6; i++) {
      await request(app)
        .post("/api/audit")

        .send({
          url: "https://example.com",
        });
    }

    const response = await request(app)
      .post("/api/audit")

      .send({
        url: "https://example.com",
      });

    console.log(response.status);
    console.log(response.body);
  });
});
