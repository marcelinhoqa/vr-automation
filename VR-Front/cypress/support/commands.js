
require('cypress-xpath');
require('cypress-real-events');
Cypress.Commands.add('clickXpath', (element) => {
    cy.xpath(element).should('be.visible')
    cy.xpath(element).click()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})