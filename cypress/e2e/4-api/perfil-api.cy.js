/// <reference types="cypress" />

describe('Funcionalidade Perfil via API', () => {
    
    let token

    beforeEach(() => {
        cy.gerarToken('thiagoambev@gmail.com', 'VuxPABTaSSnRns3').then((tkn) => {
            token = tkn
        })
    });

    it('GET - Deve consultar perfil do usuário', () => {
        cy.request({
            method: 'POST', 
            url: 'api/auth',
            body: {
                "email": "thiagoambev@gmail.com",
                "password": "VuxPABTaSSnRns3"
              } 
        }).then((response) =>{
            let token = response.body.jwt

            cy.request({
                method: 'GET', 
                url: 'api/profile/me', 
                headers: {
                    Cookie: token
                }
            }).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.company).to.equal("Via")
                expect(response.body.skills[1]).to.equal("C")
            })
        })
    });

    it.only('Deve consultar perfil do usuário - Usando token dinâmico', () => {
        cy.request({
            method: 'GET', 
            url: 'api/profile/me', 
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.company).to.equal("Via")
        })        
    });

});