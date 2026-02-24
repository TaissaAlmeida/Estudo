describe('teste', () => {
  it('teste do Login Valido', () => { 
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#login2').click()
    //Usamos o wait para fazer o cypress esperar a aba do login carregar 
    // para  poder escrever o usernasme e a seha
    cy.wait(3000)
    cy.get('#loginusername').click()
    cy.get('#loginusername').type("tassinham")
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type("Carlitinho1234")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    // o .shoulder('be.visible') vai ser utilizado para vericar se o texto existe, 
    // como um titulo, botão, imagem e etc.
    cy.get('#nameofuser').should('be.visible')

    // o ('have.text','Colocar EXATAMENTE o texto que vc está procurando')
    cy.get('#nameofuser').should('have.text','Welcome tassinham')

    cy.get('#nameofuser').should('include.text','tassinham')
    
 });
});