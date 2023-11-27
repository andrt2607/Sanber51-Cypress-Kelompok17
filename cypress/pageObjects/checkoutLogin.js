import checkoutSelectors from '../fixtures/checkoutSelector.json';
import addressSelectors from '../fixtures/newAddressSelector.json';

export class CheckoutLogin{
    static showCart(){
        cy.get(checkoutSelectors.cartIcon).click()
        cy.wait(5000)
        cy.get(checkoutSelectors.viewItem).should('exist').click({force: true})
        cy.get(checkoutSelectors.waitItem).should('exist')
    }

    static checkoutItem(){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(checkoutSelectors.tablerateBestway).should('not.be.checked').then(($radioButton) => {
            if (!$radioButton.is(':checked')) {
              cy.get(checkoutSelectors.tablerateBestway).check();
            }
        });
        cy.get(checkoutSelectors.tablerateFlatrate).should('not.be.checked').then(($radioButton) => {
            if (!$radioButton.is(':checked')) {
              cy.get(checkoutSelectors.tablerateFlatrate).check();
            }
        });
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.wait(5000)
        cy.get(checkoutSelectors.checklistSameAddress).then(($checkbox) => {
            if ($checkbox.is(':checked')) {
                cy.log('Checkbox is checked')
            } else {
                cy.get(checkoutSelectors.checklistSameAddress).uncheck();
                cy.get(checkoutSelectors.checklistSameAddress).click().should('be.checked');
                cy.log('Checkbox is not checked')
            }
          });
    }

    static checkoutItemNewAddress(firstName,lastName,company,street,city,region,postcode,country,telephone){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(addressSelectors.buttonAddAddress).click()
        cy.get(addressSelectors.addressFirstnameInput).clear().type(firstName)
        cy.get(addressSelectors.addressLastnameInput).clear().type(lastName)
        cy.get(addressSelectors.addressCompanyInput).type(company)
        cy.get(addressSelectors.addressStreetInput).type(street)
        cy.get(addressSelectors.addressCityInput).type(city)
        cy.get(addressSelectors.addressRegionInput).select(region)
        cy.get(addressSelectors.addressPostcodeInput).type(postcode)
        cy.get(addressSelectors.addressCountryInput).select(country)
        cy.get(addressSelectors.addressPhoneInput).type(telephone)
        cy.get(addressSelectors.saveAddressBook).should('be.checked')
        cy.contains(addressSelectors.buttonSaveAddress).click()
        cy.wait(5000)
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.wait(5000)
        cy.get(checkoutSelectors.checklistSameAddress).click().should('be.checked');
    }

    static checkoutWithoutShipMethod(){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick().then(() => {
            cy.wait(5000);
            cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping')
        })
        cy.get(checkoutSelectors.tablerateBestway).should('not.be.checked')
        cy.get(checkoutSelectors.tablerateFlatrate).should('not.be.checked')
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get('.message > span').invoke('text').then((text) => {
            cy.log('Text content:', text)
            cy.get('.message > span').should('have.text',  'The shipping method is missing. Select the shipping method and try again.')
        })
    }

    static checkoutUnchecklistBillShip(){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.checklistSameAddress, { timeout: 10000 }).uncheck()
    }

    static changeShipTo(){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.changeShipTo).click()
        cy.get(checkoutSelectors.shippingAddress).click();
        cy.get(checkoutSelectors.buttonNextShipping).click().then(() => {
            cy.wait(5000);
            cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#payment')
        })
    }

    static changeShipMethod(){
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.changeShippingMeth).click()
        cy.get(checkoutSelectors.tablerateFlatrate).check()
        cy.get(checkoutSelectors.buttonNextShipping).click().then(() => {
            cy.wait(5000);
            cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#payment')
        })
    }

    static placeOrderEnable(){
        cy.get(checkoutSelectors.buttonPlaceOrder).click()
    }

    static placeOrderDisable(){
        cy.get(checkoutSelectors.buttonPlaceOrderDisabled).should('exist')
    }

    static printingReceipt(){
        cy.get(checkoutSelectors.printReceipt).click()
    }

    static message(msg, tmOut){
        cy.contains(msg).should('exist')
        cy.wait(tmOut)
    }


}

export default CheckoutLogin;