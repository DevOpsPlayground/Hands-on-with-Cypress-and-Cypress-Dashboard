/*globals Cypress cy*/

describe('CI test', () => {
    //refactor with a beforeEach for cy.visit command
    it('should run a test', () => {
        cy.visit(Cypress.env('HOST'));
        cy.get('[type="submit"]').should('be.visible');
    });

    /*** TO DO ***/
    //Write tests for different behaviour scenarios 
    //For example can you enter text into the comments section
    // - What kind of text is allowed?

});
