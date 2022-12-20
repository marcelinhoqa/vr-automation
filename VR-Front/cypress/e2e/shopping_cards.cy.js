/// <reference types="cypress" />
import {privacityTerm} from "../support/components/PrivacityTerm"
import { multiPage } from "../support/page/MultiPage"

// Arquivo que faz a execução do teste 
// São os casos de testes

describe('Vr Store', () => {
 
  beforeEach( function() {
    cy.visit('/')
    // cy.intercept('GET', '/isAllPurposesOfPrivacyTermAccepted').as('accept')
    // cy.wait('@accept')
    privacityTerm.accept();
  })

  it('validate product balance', function() {
    //home.forYou();
    multiPage.goVrMulti();
    multiPage.clickSimulateBuyOn();
   
    privacityTerm.acceptStoreVrCookies();

    multiPage.clickButtonSelectVrMultiCard();
    multiPage.clickChooseNumberOfCardsVrMulti();

    cy.fixture('cards').as('cards_vr').then(()=>{
   
    multiPage.fillAllCardsVr(this.cards_vr.vr_multi_saldo_auxilio, this.cards_vr.vr_multi_saldo_refeicao,
         this.cards_vr.vr_multi_saldo_alimentacao, this.cards_vr.vr_multi_saldo_home_office, this.cards_vr.vr_multi_saldo_mobilidade)

  })

  multiPage.validateBalance();

})

  

})
