describe("Mock API Example", () => {
  it("mock API response", () => {
    cy.intercept("GET", "/api/user", {
      statusCode: 200,

      body: {
        name: "Mock User",
      },
    }).as("getUser");
  });
});
