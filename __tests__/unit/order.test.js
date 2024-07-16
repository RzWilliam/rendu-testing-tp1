/**
 * Couverture de Tests :
 * - Calcul du total de la commande
 * - Vérification des valeurs de retour pour différentes combinaisons d'articles
 */
import { expect } from "chai";
import { Order, calculateTotal } from "../../src/models/order.js";

describe("Order Model", () => {
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

  it("should calculate order total correctly", () => {
    const order = { items: [{ price: 10 }, { price: 20 }, { price: 30 }] };
    expect(calculateTotal(order)).to.equal(60);
  });

  it("should validate order correctly", () => {
    const validOrder = new Order(1, [{ price: 10 }, { price: 20 }]);
    expect(validOrder.isValid()).to.be.true;

    const invalidOrderNoItems = new Order(1, []);
    expect(invalidOrderNoItems.isValid()).to.be.false;

    const invalidOrderNoMember = new Order(null, [
      { price: 10 },
      { price: 20 },
    ]);
    expect(invalidOrderNoMember.isValid()).to.be.false;

    const invalidOrderNotArray = new Order(1, "not an array");
    expect(invalidOrderNotArray.isValid()).to.be.false;
  });
});
