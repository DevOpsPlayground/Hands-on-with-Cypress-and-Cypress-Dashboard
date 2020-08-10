/*globals Cypress cy*/

describe('CI test', () => {
    it('should run a test', () => {
        cy.visit(Cypress.env('host'));
        cy.log('TESTING! Hello World');
        cy.get('[type="submit"]').should('be.visible');
    });
});