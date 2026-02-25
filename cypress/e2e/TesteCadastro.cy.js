describe('CadastroDeUsuario', () => {
  it('CadastroCorreto', () => { 

    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#signin2').click()

    //Espera a pagina carregar e coloca o username
    cy.wait(2000)
    cy.get('#sign-username').click()
    cy.get('#sign-username').type("tassinham")

    //Espera a pagina carregar e coloca o password
    cy.wait(3000)
    cy.get('#sign-password').click()
    cy.get('#sign-password').type("Carlitinho1234")

    //Clica no botão de login
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    //Clica no botão de fechar
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
  });
});