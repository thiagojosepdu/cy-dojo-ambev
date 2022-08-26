class CadastroPage {

        cadastro(nome, email, senha, confirmSenha){
            cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
            cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
            cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
            cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(confirmSenha)
            cy.get('[data-test="register-submit"]').click()
    }

        cadastroPJ(){


        }


        
        cadastroPF(){

            
        }
}

export default new CadastroPage()