describe('Verify Login', () => {
    it('Successfully Login with Valid Data', () => 
    {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type('nufikharizki@gmail.com')
      cy.get('#pass').type('123Abc000')
      cy.get('#send2').click()
      cy.screenshoot()
    })
  });