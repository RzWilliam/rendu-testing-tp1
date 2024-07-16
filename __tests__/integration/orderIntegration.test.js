/**
 * Couverture de Tests :
 * - Création d'une nouvelle commande
 * - Association de la commande avec un membre
 */
import request from "supertest";
import { expect } from "chai";
import app from "../../src/app.js";

describe("Order Integration Tests", () => {
  it("should create a new order for a member", async () => {
    const memberResponse = await request(app)
      .post("/members")
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
      });

    const orderResponse = await request(app)
      .post("/orders")
      .send({
        memberId: memberResponse.body.id,
        items: [{ productId: 1, quantity: 2 }],
      });

    expect(orderResponse.statusCode).to.equal(201);
    expect(orderResponse.body.memberId).to.equal(memberResponse.body.id);
  });
});
