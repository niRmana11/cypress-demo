describe("Login Test", () => {
  it("Valid Login", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("admin");
    cy.get("#password").type("1234");

    cy.get("#loginBtn").click();

    cy.get("#message").should("have.text", "Login Successful");
  });
});
