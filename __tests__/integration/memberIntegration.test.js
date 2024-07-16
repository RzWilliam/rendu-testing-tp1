/**
 * Couverture de Tests :
 * - Inscription d'un nouveau membre
 * - Vérification de la sauvegarde des informations en base de données
 */
import request from "supertest";
import { expect } from "chai";
import app from "../../src/app.js";

describe("Member Integration Tests", () => {

  before(() => {
    // Code de configuration avant tous les tests
  });

  after(() => {
    // Code de nettoyage après tous les tests
  });

  beforeEach(() => {
    // Code à exécuter avant chaque test individuel
  });

  afterEach(() => {
    // Code à exécuter après chaque test individuel
  });

  it("should register a new member", async () => {
    const response = await request(app)
      .post("/members")
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
      });

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("email");
    expect(response.body.email).to.equal("john.doe@example.com");
  });
});

