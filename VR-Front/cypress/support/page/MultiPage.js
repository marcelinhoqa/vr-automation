import Navigation from './../components/Navigation'
class MultiPage {

    constructor() {
        this.nav = new Navigation()
    }

    goVrMulti(){
        this.nav.hoverForCompany();
        this.nav.clickVrMulti();
    }

    clickSimulateBuyOn(){
        cy.clickXpath("//*[contains(text(), 'Simule e compre online')]")
    }

    clickButtonSelectVrMultiCard(){
        cy.get("#botao-selecionar-modalidade-multi").click();
    }

    clickChooseNumberOfCardsVrMulti(){
        cy.get("button .fa-plus").click();
    }

    fillAllCardsVr(vr_va, refeicao, alimentacao, home, mobilidade){
        cy.get("#product-vr-multi-saldo-auxilio-vr-mais-va-value").type(vr_va)
        cy.get("#product-vr-multi-saldo-refeicao-value").type(refeicao)
        cy.get("#product-vr-multi-saldo-alimentacao-value").type(alimentacao)
        cy.get("#product-vr-multi-saldo-home-office-value").type(home)
        cy.get("#product-vr-multi-saldo-mobilidade-value").type(mobilidade)
    }

    clickButtonAddCard(){
        cy.get("#botao-adicionar-carrinho-modalidade-multi").click();
    }

    validateBalance(){
        cy.get('.total-value-box__total-value').contains('100,00')

        // cy.get('.total-value-box__total-value').should(result => {
        //     var textResult = result.text()
        //     expect(textResult).to.eq("R$ 100,00")
        // })
    }
}

export const multiPage = new MultiPage()