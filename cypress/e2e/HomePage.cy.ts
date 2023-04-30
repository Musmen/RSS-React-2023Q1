import 'cypress/react';

describe('Testing Home Page', () => {
  it('Should mount Home Page', () => {
    cy.visit('/');

    cy.get('.SearchBar').should('exist');
    cy.get('.SearchBar__input').should('have.attr', 'placeholder');

    cy.get('.Spinner').should('exist');
    cy.get('.Spinner').should('not.exist');

    cy.get('.Popup').should('not.exist');
    cy.get('.PopupCard').should('not.exist');

    cy.get('.CardsList > .CardsList__item').should('not.have.length', 0);
    cy.get('.Card:first').click();

    cy.get('.Popup').should('exist');
    cy.get('.PopupCard').should('exist');

    cy.get('.Popup-button').click();

    cy.get('.Popup').should('not.exist');
    cy.get('.PopupCard').should('not.exist');
  });
});
