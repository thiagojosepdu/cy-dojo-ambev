/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"


describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('login')
  });


  it('Deve fazer login e Cadastro', () => {
    cy.login('Ivani.Melo99@live.com', 'teste@123')
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-5"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('AmbevTech')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://conexaoqa.herokuapp.com/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Maringá')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Cypress; Relatórios Cypress; Git')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('thiagoteste@git.com')
    cy.get('[rows="1"]').type('Aluno do curso de cypress da ambevtech')
    cy.get('[data-test="profile-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Ivani')    
  });
  


});