describe('RequisicacaoDeApi', ()=>{

      it('TesteValido', ()=> {

       cy.request({
        method: 'POST', 
         url:'https://serverest.dev/login',
         body:{
          "email": "fulano@qa.com",
          "password": "teste"
         }
        
        }).then((response) => {
          //Código para saber se o login deu certo
          expect(response.status).to.eq(200)

          //Código para confirmar se a mensagem de sucesso do corpo da requisição está correta
         expect(response.body).to.have.property("message", "Login realizado com sucesso")
              
        })    
      })

      it('TesteInvalido', () => {
        cy.request({
           method: 'POST',
            url:'https://serverest.dev/login',
            body:{
              "email": "fulano@qa.br",
              "password": "teste"
            },
            failOnStatusCode: false
        }).then((response) => {
             //Código para saber se o login deu errado
             expect(response.status).to.eq(401)
             expect(response.body).to.have.property("message","Email e/ou senha inválidos")
})

  })
}) 

