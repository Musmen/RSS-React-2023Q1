describe('Testing About Page', () => {
  it('Should visit About Page', () => {
    cy.visit('/about');

    cy.get('.bold-text').should('contain.text', 'About Page');
  });
});
