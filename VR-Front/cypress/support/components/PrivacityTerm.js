class PrivacityTerm {

    
    accept(){
        cy.xpath("//*[contains(text(), 'Aceitar termo de privacidade')]").first().click();
    }

    acceptStoreVrCookies(){
        cy.get('#sc_terms-consent').click();

    }

    //https://api.vr.com.br/simulecompre/v2/landing-page/default

}

export const privacityTerm = new PrivacityTerm()