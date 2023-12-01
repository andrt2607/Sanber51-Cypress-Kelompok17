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

  Cypress.Commands.add('redirectLogin', (email, password) => {
    // cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'). type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  });

Cypress.Commands.add('addToCart', () => {
  cy.contains('Gear').click()
  cy.contains('watches').click()
  cy.contains('Clamber Watch').click()
  cy.get('#qty').clear().type('1')
  cy.wait(2000)
  cy.get('#product-addtocart-button',{ timeout: 10000 }).click()
  cy.wait(5000)
});