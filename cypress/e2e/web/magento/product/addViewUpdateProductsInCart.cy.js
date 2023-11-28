describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.wait(3000);

    // Plih Product dikarenakan jika langsung cart maka value akan 0 karena belum login
    cy.get('#option-label-size-143-item-166').click() 
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear().type('3') // Gantilah '3' dengan nilai yang diinginkan
    cy.get('#product-addtocart-button').click()
    cy.wait(5000);

    // Klik Button Cart
    cy.get('.showcart').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()

    // Update isi dari Products yang ingin dicheckout
    cy.get('.col.qty > .field > .control').type('1'); // mengisi tambahan dengan nilai yang diinginkan
    cy.get('.update').click() //Button untuk mengudpate cart
    cy.wait(3000);

    // Klik button checkout
    cy.get('.checkout-methods-items > :nth-child(1) > .action').click()

    // NOTE: Banyak code yang menggunakan wait digunakan sebagai delay, agar sistem dapat ditampilkan dengan baik - M. Yoga Sugama (Michikhyo)
    
  })
})
