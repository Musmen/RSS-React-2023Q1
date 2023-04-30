describe('Testing Not Found Page', () => {
  it('Should visit Not Found Page', () => {
    cy.visit('/Not Found Page');

    cy.get('.bold-text').should('contain.text', 'Page Not Found');
  });
});
