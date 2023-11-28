import checkoutSelectors from '../fixtures/checkoutSelector.json';
import addressSelectors from '../fixtures/newAddressSelector.json';

export class CheckoutNotLogin{
    static showCart(){
        cy.get(checkoutSelectors.cartIcon).click()
        cy.wait(5000)
        cy.get(checkoutSelectors.viewItem).should('exist').click()
        cy.get(checkoutSelectors.waitItem).should('exist')
    }
    static checkoutItem(email, firstName,lastName,company,street,city,region,postcode,country,telephone){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(addressSelectors.emailInput).first().type(email)
        cy.get(addressSelectors.addressFirstnameInput).type(firstName)
        cy.get(addressSelectors.addressLastnameInput).type(lastName)
        cy.get(addressSelectors.addressCompanyInput).type(company)
        cy.get(addressSelectors.addressStreetInput).type(street)
        cy.get(addressSelectors.addressCityInput).type(city)
        cy.get(addressSelectors.addressRegionInput).select(region)
        cy.get(addressSelectors.addressPostcodeInput).type(postcode)
        cy.get(addressSelectors.addressCountryInput).select(country)
        cy.get(addressSelectors.addressPhoneInput).type(telephone)
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.checklistSameAddress).click().should('be.checked')
        cy.get(checkoutSelectors.buttonPlaceOrder).click()
    }

    static checkoutWithoutShipMethod(email, firstName,lastName,company,street,city,region,postcode,country,telephone){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(addressSelectors.emailInput).first().type(email)
        cy.get(addressSelectors.addressFirstnameInput).clear().type(firstName)
        cy.get(addressSelectors.addressLastnameInput).clear().type(lastName)
        cy.get(addressSelectors.addressCompanyInput).type(company)
        cy.get(addressSelectors.addressStreetInput).type(street)
        cy.get(addressSelectors.addressCityInput).type(city)
        cy.get(addressSelectors.addressRegionInput).select(region)
        cy.get(addressSelectors.addressPostcodeInput).type(postcode)
        cy.get(addressSelectors.addressCountryInput).select(country)
        cy.get(addressSelectors.addressPhoneInput).type(telephone)
        cy.get(checkoutSelectors.tablerateBestway).should('not.be.checked')
        cy.get(checkoutSelectors.tablerateFlatrate).should('not.be.checked');
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get('.message > span').invoke('text').then((text) => {
            cy.log('Text content:', text)
            cy.get('.message > span').should('have.text',  'The shipping method is missing. Select the shipping method and try again.')
        })
    }

    static message(msg, tmOut){
        cy.contains(msg).should('exist')
        cy.wait(tmOut)
    }
}