class Navigation {

    clickVrMulti(){
        cy.clickXpath("//a[@href='/multi.htm']")
    }
    clickForCompany() {
        cy.clickXpath("//a[@href='/empresas.htm']")
    }

    hoverForCompany(){
        cy.contains("a", "Pra sua Empresa").realHover('mouse')
    }


    clickEstablishment() {
        cy.clickXpath("//a[@href='/estabelecimento.htm']") 
    }

    clickForYou() {
        cy.clickXpath('//a[contains(@href,"/onde-aceita")]')
    }
    
    clickSaleVr(){
        cy.clickXpath('a[href="/venda-parceiro-vr"]')
    }
    
    clickAboutVr() {
        cy.clickXpath('//a[contains(@href,"https://www.vr.com.br/institucional-vr/historia-da-vr.htm")]')
    }

    openMenu() {
      
    }


}

export default Navigation