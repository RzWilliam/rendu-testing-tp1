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
    const memberResponse = await request(app).post("/members").send({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
    });

    const memberId = memberResponse.body.id;

    const orderResponse = await request(app)
      .post("/orders")
      .send({ memberId, items: [{ productId: 1, quantity: 2 }] });
    expect(orderResponse.status).to.equal(201);
    expect(orderResponse.body.order.memberId).to.equal(memberId);
  });
});

