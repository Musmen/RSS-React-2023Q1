describe('Testing Card Form Page', () => {
  it('Should visit Card Form Page', () => {
    cy.visit('/form');

    cy.get('.CardForm').should('contain.text', 'Create new image card');
    cy.get('.CardsList > .CardsList__item').should('have.length', 0);
    cy.get('.success-message__layout').should('not.exist');
    cy.get('.CardForm-validation-error-message > span').then((items) =>
      Array.from(items).every((item) => item.textContent === '')
    );

    cy.get('.button__submit').click();
    cy.get('.CardForm-validation-error-message > span').then((items) =>
      Array.from(items).every((item) => item.textContent !== '')
    );

    cy.get('.button__reset').click();
    cy.get('.CardForm-validation-error-message > span').then((items) =>
      Array.from(items).every((item) => item.textContent === '')
    );
  });
});
