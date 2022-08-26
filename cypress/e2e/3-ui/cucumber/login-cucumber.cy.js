import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('que eu esteja na página de Login', () => {
    cy.visit('https://conexaoqa.herokuapp.com/login')
    
});

When('eu inserir um usuário e senha', () => {
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('thiagoambev@gmail.com')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('VuxPABTaSSnRns3')
        cy.get('[data-test="register-submit"]').click()
    cy.login('thiagoambev@gmail.com', 'VuxPABTaSSnRns3')
});


Then('deve validar mensagem de sucesso', () => {
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo') 
});