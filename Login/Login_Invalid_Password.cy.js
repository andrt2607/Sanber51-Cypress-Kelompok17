describe('Verify Login', () => {
    it('Failed Login with Wrong Password', () => 
    {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type('nufikharizki@gmail.com')
      cy.get('#pass').type('0000abc')
      cy.get('#send2').click()
      cy.get('.message-error').should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
  });
  
