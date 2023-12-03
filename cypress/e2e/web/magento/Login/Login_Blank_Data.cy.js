describe('Verify Login', () => {
    it('Failed Login with Blank Data', () => 
    {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email')
      cy.get('#pass')
      cy.get('#send2').click()
      cy.get('.message-error > div').should('A login and a password are required.')
    })
  });