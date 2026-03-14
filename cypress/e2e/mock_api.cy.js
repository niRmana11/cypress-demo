describe("Mock API Example", () => {
  it("mock API response", () => {
    cy.intercept("GET", "/api/user", {
      statusCode: 200,
      body: { name: "Mock User" },
    }).as("getUser");

    cy.visit("http://localhost:3000");

    cy.window().then((win) => {
      win.fetch("/api/user");
    });

    cy.wait("@getUser").then((interception) => {
      expect(interception.response.body.name).to.equal("Mock User");
    });
  });
});
