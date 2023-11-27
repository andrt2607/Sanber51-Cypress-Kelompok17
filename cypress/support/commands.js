Cypress.Commands.add('clickRedirect', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
})

Cypress.Commands.add('clickRedirectProductWoman', () => {
    cy.visit("");
    cy.get("#ui-id-4").click();
})

Cypress.Commands.add('clickRedirectProductMen', () => {
    cy.visit("");
    cy.get("#ui-id-5").click();
})

Cypress.Commands.add('clickRedirectProductGear', () => {
    cy.visit("");
    cy.get("#ui-id-6").click();
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })