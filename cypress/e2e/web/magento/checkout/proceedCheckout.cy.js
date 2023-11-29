import {CheckoutLogin} from '../../../../pageObjects/checkoutLogin.js'
import {CheckoutNotLogin} from '../../../../pageObjects/checkoutNotLogin.js'
import addressData from '../../../../fixtures/addressData.json'
import checkoutSelectors from '../../../../fixtures/checkoutSelector.json';

describe('Checkout Testing with User Login Conditions', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('1. Checkout Successfull - Same shipping & billing address', () => {
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    cy.addToCart()                                                       
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    CheckoutLogin.checkRate()
    CheckoutLogin.checkShippingAddress()
    CheckoutLogin.placeOrderEnable()
    CheckoutLogin.message('Thank you for your purchase!',1000)
    // cy.screenshot('Proceed to Checkout Successfull - Same shipping & billing address')
  })

  it('2. Checkout Successfull - With New Address', () => {
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    cy.addToCart()                                                       
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    CheckoutLogin.addNewAddress(addressData.addAddress.addressValid.firstname, addressData.addAddress.addressValid.lastname, 
      addressData.addAddress.addressValid.company, addressData.addAddress.addressValid.street, addressData.addAddress.addressValid.city, 
      addressData.addAddress.addressValid.region, addressData.addAddress.addressValid.postcode, addressData.addAddress.addressValid.country,
      addressData.addAddress.addressValid.telephone)
    cy.wait(1000)
    // cy.screenshot('Proceed to Checkout Successfull - With New Address')
    CheckoutLogin.checkRate()
    CheckoutLogin.checkShippingAddress()
    CheckoutLogin.placeOrderEnable()
    CheckoutLogin.message('Thank you for your purchase!',1000)
    // cy.screenshot('Proceed to Checkout Successfull - With New Address')
  })

  it('3. Checkout failed - Shipping method is empty', () => {  
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    cy.addToCart()                                                      
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    CheckoutLogin.checkoutWithoutShipMethod()
    CheckoutLogin.message('The shipping method is missing. Select the shipping method and try again.',1000)
    // cy.screenshot('Proceed to Checkout failed - Shipping method is empty')
  })

  it('4. Checkout failed - UnChecklist the same billing & shipping address', () => {  
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    cy.addToCart()
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    CheckoutLogin.checkoutUnchecklistBillShip()
    CheckoutLogin.placeOrderDisable()
    // cy.screenshot('Proceed to Checkout failed - UnChecklist the same billing & shipping address')
  })

  it('5. Change Summary Successfull - Shipping to', () => {  
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    cy.addToCart()
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    cy.wait(1000)
    CheckoutLogin.changeShipTo()
    // cy.screenshot('Proceed to Checkout - Change Summary Successfull - Shipping to')
  })

  it('6. Change Summary Successfull - Shipping method', () => {  
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    // cy.addToCart()
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    cy.wait(1000)
    CheckoutLogin.changeShippingMethod()
    CheckoutLogin.message('Flat Rate - Fixed',1000)
    // cy.screenshot('Proceed to Checkout - Change Summary Successfull - Shipping method')
  })

  it.only('7. Checkout Successfull - Print Receipt', () => {
    cy.redirectLogin('rizqikartika@gmail.com','password123@')
    cy.addToCart()
    CheckoutLogin.showCart()
    CheckoutLogin.checkoutItem()
    cy.wait(1000)
    CheckoutLogin.checkRate()
    // cy.get(checkoutSelectors.tablerateBestway).should('exist').check();
    cy.get(checkoutSelectors.buttonNextShipping).click()
    cy.wait(2000)
    CheckoutLogin.placeOrderEnable()
    CheckoutLogin.printingReceipt() 
    cy.contains('print').should('exist')
    cy.screenshot('Proceed to Checkout Successfull - Print Receipt')
  })
})

describe('Checkout Testing with User Not Login Conditions', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('1. Checkout Successfull - Not Login - Fill out the form address without login', () => {
    cy.addToCart()
    CheckoutNotLogin.showCart()
    CheckoutNotLogin.checkoutItem(addressData.addAddress.addressValid.email, addressData.addAddress.addressValid.firstname, addressData.addAddress.addressValid.lastname, 
      addressData.addAddress.addressValid.company, addressData.addAddress.addressValid.street, addressData.addAddress.addressValid.city, 
      addressData.addAddress.addressValid.region, addressData.addAddress.addressValid.postcode, addressData.addAddress.addressValid.country,
      addressData.addAddress.addressValid.telephone)
    CheckoutNotLogin.message('Thank you for your purchase!',1000)
    //cy.screenshot('Proceed to Checkout Successfull - Not Login - Fill out the form address without login')
  })

  it('2. Checkout Failed - Not Login - Empty Shipping Method', () => {
    cy.addToCart()
    CheckoutNotLogin.showCart()
    CheckoutNotLogin.checkoutWithoutShipMethod(addressData.addAddress.addressValid.email, addressData.addAddress.addressValid.firstname, addressData.addAddress.addressValid.lastname, 
      addressData.addAddress.addressValid.company, addressData.addAddress.addressValid.street, addressData.addAddress.addressValid.city, 
      addressData.addAddress.addressValid.region, addressData.addAddress.addressValid.postcode, addressData.addAddress.addressValid.country,
      addressData.addAddress.addressValid.telephone)
    CheckoutNotLogin.message('The shipping method is missing. Select the shipping method and try again.',1000)
    //cy.screenshot('Proceed to Checkout Failed - Not Login - Empty Shipping Method')
  })

})