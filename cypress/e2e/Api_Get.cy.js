describe('RequisicacaoDeApi', () => {
  it('TesteValido', () => {

    cy.request({
   method: 'GET',
   url:'https://serverest.dev/carrinhos/qbMqntef4iTOwWfg'
   
   }).then((response) => {
     expect(response.status).to.eq(200)    

    // Verifica se o primeiro item do array "produtos"
    // possui a propriedade "idProduto"
    // e se o valor dessa propriedade é exatamente "BeeJh5lz3k6kSIzA"
      expect(response.body.produtos[0]).to.have.property("idProduto", "BeeJh5lz3k6kSIzA")
      expect(response.body.produtos[1]).to.have.property("idProduto", "K6leHdftCeOJj8BJ")

    // Verificaa"quantidade" do primeiro produto é "2"

      expect(response.body.produtos[0]).to.have.property("quantidade",2)
      expect(response.body.produtos[1]).to.have.property("quantidade",1)

    // Verifica se "precoUnitario" do primeiro produto é 470
      expect(response.body.produtos[0]).to.have.property("precoUnitario",470)
      expect(response.body.produtos[1]).to.have.property("precoUnitario",5240)
})

  });
});