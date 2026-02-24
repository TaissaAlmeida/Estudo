describe('teste', () => {
  it('teste', () => { 
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#signin2').click()
    cy.wait(2000)
    cy.get('#sign-username').click()
    cy.get('#sign-username').type("tassinham")
    cy.wait(3000)
    cy.get('#sign-password').click()
    cy.get('#sign-password').type("Carlitinho1234")
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
     cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
  });
});