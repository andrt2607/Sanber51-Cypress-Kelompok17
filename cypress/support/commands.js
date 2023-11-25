Cypress.Commands.add('clickRedirect', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
})