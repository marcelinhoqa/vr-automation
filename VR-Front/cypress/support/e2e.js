import './commands'


Cypress.Commands.add('containsTheTextXpath', (element, message) => {
    cy.xpath(element).should('contain', message)
})