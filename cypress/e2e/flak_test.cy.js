/// <reference types="cypress" />

describe('Flak Teste', () => {
    beforeEach(() => {
        cy.visit('/')
    });

   for (let k=0; k<10; k++){
 
    it('Adicionar curso', () => {

    cy.get('input[name="name"]').click().type('Some Name')
    
    cy.get('input[name="email"]').click().type('some@email.com')
    
    cy.get('select[name="department"]').select('core')
    
    cy.get('select[name="course"]').select('git-it')
    
    cy.get('input[type="submit"]').click()
    
    cy.get('input[value="Saved!"]').should('be.visible')
  
    cy.get('li').should('contain', ' core - git-it')
  })
}
  
});