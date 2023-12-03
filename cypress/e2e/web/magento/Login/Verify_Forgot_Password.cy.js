describe('Verify Forgot Password Functionality', () => {
    it('Successfully Changed', () => 
    {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type('nufikharizki@gmail.com')
      cy.get('.secondary > .action > span').click()
      cy.get('#email_address').type('nufikharizki@gmail.com')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-success').should('If there is an account associated with nufikharizki@gmail.com you will receive an email with a link to reset your password.')
      cy.screenshoot()
    })
  });