describe("Fixture Login Test", () => {
  it("login using fixture data", () => {
    cy.fixture("user").then((data) => {
      cy.visit("http://localhost:3000");

      cy.get("#username").type(data.username);
      cy.get("#password").type(data.password);

      cy.get("#loginBtn").click();

      cy.get("#message").should("have.text", "Login Successful");
    });
  });
});
