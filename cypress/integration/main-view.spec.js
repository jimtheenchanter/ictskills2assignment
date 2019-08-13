describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("loads the list of events", () => {
        cy.get(".badge").should("contain", 7);
        cy.get(".card").should("have.length", 50);
    });
});