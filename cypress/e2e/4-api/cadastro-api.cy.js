/// <reference types="cypress" />

describe('Funcionalidade Cadastro via API', () => {
    it('Deve fazer cadastro com sucesso', () => {
        
        //var email = "fabio" + Math.floor(Math.random() * 100000) + "@teste.com"//cria de forma dinâmica um e-mail
        var email2 = `fabio${Math.floor(Math.random() * 100000)}@teste.com`//cria de forma dinâmica um e-mail//Este é o mesmo exemplo porém é por interpolação, ou seja, não precisa ficar conctenando. O que muda são as aspas
        
        cy.request({
            method: 'POST',
            url: '/api/users',
            body:{                
                    "name": "Fábio Araújo",
                    "email": email2,
                    "password": "teste@123"
                  }
        }).then((response) => {
            expect(response.status).to.equals(201)
            expect(response.body).to.have.property('jwt')

        })        
    });
});