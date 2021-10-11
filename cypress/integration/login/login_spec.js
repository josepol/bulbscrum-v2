/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })
  it("should login successfully", () => {
    cy.get("#email-login").type("test@test.com").should("have.value", "test@test.com");
    cy.get("#password-login").type("password123").should("have.value", "password123");
    cy.get("#submit-login").click();
  });
});
