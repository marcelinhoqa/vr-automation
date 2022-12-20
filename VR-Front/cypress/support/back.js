/* Intercept
A ideia desse arquivo é trabalhar com uma DSL que envolve endpoints
 */

Cypress.Commands.add('getIntercep', (obj, name) => {
    cy.intercept({
        obj
    }).as(name)
});

Cypress.Commands.add('getInterceptWithStatusCode', (verb, path, objStatusCode) => {
    cy.intercept(verb, path, {
        statusCode: objStatusCode,
    })
});

Cypress.Commands.add('getInterceptWithFixture', (verb, path, obj, fixture, name) => {
    cy.intercept({
        method: verb,
        pathname: path,
        obj,
        fixture
    }).as(name)
});
