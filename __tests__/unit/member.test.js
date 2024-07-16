/**
 * Couverture de Tests :
 * - Validation des champs du formulaire d'inscription des membres
 * - Vérification des valeurs de retour pour les membres valides et invalides
 */
import { expect } from "chai";
import { Member, validateMember } from "../../src/models/member.js";

describe("Member Model", () => {
  it("should validate member correctly", () => {
    const validMember = new Member("John", "Doe", "john.doe@example.com", "password123");
    expect(validMember.isValid()).to.be.true;

    const invalidMember = new Member("", "Doe", "john.doe@example.com", "password123");
    expect(invalidMember.isValid()).to.be.false;

    const externalValidMember = {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      password: "password123",
    };
    expect(validateMember(externalValidMember)).to.be.true;

    const externalInvalidMember = {
      firstName: "",
      lastName: "Doe",
      email: "jane.doe@example.com",
      password: "password123",
    };
    expect(validateMember(externalInvalidMember)).to.be.false;
  });
});

