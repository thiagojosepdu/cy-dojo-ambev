/// <reference types="cypress" />

describe('Funcionalidade Login via API', () => {

    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
            body:{
                "email": "fabio@teste.com",
                "password": "teste@123"
            }

        }).should((response) => {//validação o retorno da requisição se o status é 200
                expect(response.status).to.equals(200)
                expect(response.body).to.have.property('jwt')//espero que na minha resposta tenha a propriedade jwt
                expect(response.duration).be.lessThan(500)//validação de performance, validando se passa de 500 mili segundos

        })

    });
    
});