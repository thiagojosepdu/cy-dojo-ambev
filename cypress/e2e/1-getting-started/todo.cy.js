/// <reference types="cypress" />
it('Start a batch', () => {
  cy.viewport(1440, 900)
  cy.visit('http://lojaebac.ebaconline.art.br/')
})

Cypress.on('uncaught:exception', (err, runnable) => {// returning false here prevents Cypress from // failing the test
  return false
});