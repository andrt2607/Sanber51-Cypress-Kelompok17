import checkoutSelectors from '../fixtures/checkoutSelector.json';
import addressSelectors from '../fixtures/newAddressSelector.json';

export class CheckoutLogin{
    static showCart(){
        cy.get(checkoutSelectors.cartIcon).click()
        cy.wait(5000)
        cy.get(checkoutSelectors.viewItem).should('exist').click({force: true})
        // cy.get(checkoutSelectors.waitItem).should('exist')
    }

    static checkoutItem(){
        cy.wait(5000)
        cy.get(checkoutSelectors.buttonProceedtoCheckout).dblclick()
    }

    static checkRate(){
        cy.get('#checkout-loader', { timeout: 300000 }).should('not.exist');
        cy.get('.table-checkout-shipping-method tbody tr .radio').then(($elements) => {
            let jumlahData=$elements.length;
            cy.log('jumlah data:'+jumlahData)
            if(jumlahData>1){
                for (let index = 2; index < jumlahData; index++) {
                    cy.get(':nth-child('+index+') > :nth-child(1) > .radio').click()
                     cy.get('.loading-mask',{ timeout: 300000 }).should('not.exist')
                    cy.get(':nth-child('+index+') > :nth-child(1) > .radio').should('be.checked')
                    cy.wait(5000)
                }
                cy.wait(5000)
                cy.get(checkoutSelectors.tablerateBestway).click({ force: true })
                cy.get('.loading-mask',{ timeout: 300000 }).should('not.exist')
                cy.get(checkoutSelectors.tablerateBestway).should('be.checked')
          
            }else{
                cy.get(checkoutSelectors.tablerateBestway).click()
                cy.get(checkoutSelectors.tablerateBestway).should('be.checked')
                cy.wait(5000)
            }
        });
    }

    static checkShippingAddress(){
        cy.get(checkoutSelectors.buttonNextShipping).click({ force: true })
        cy.wait(5000)
          cy.get(checkoutSelectors.checklistSameAddress).then(($checkbox) => {
            if ($checkbox.is(':checked')) {
                cy.log('Checkbox is checked')
            } else {
                cy.get(checkoutSelectors.checklistSameAddress).check({ force: true }).should('be.checked')
                cy.log('Checkbox is not checked, checked now.')
            }
        });
    }

    static addNewAddress(firstName,lastName,company,street,city,region,postcode,country,telephone){
        cy.get(addressSelectors.buttonAddAddress, { timeout: 10000 }).click()
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
    }

    static checkoutWithoutShipMethod(){
        cy.get('#checkout-loader',{ timeout: 300000 }).should('not.exist')
        cy.get(checkoutSelectors.tablerateBestway).should('not.be.checked')
        cy.get(checkoutSelectors.tablerateFlatrate).should('not.be.checked')
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get('.message > span').invoke('text').then((text) => {
            cy.log('Text content:', text)
            cy.get('.message > span').should('have.text',  'The shipping method is missing. Select the shipping method and try again.')
        })
    }

    static checkoutUnchecklistBillShip(){
        cy.get('#checkout-loader',{ timeout: 300000 }).should('not.exist')
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.checklistSameAddress, { timeout: 10000 }).uncheck()
    }

    static changeShipTo(){
        cy.get('#checkout-loader',{ timeout: 300000 }).should('not.exist')
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.changeShipTo).should('exist').click()
        cy.get(checkoutSelectors.shippingAddress).click();
        cy.get(checkoutSelectors.buttonNextShipping).click().then(() => {
            cy.wait(5000);
            cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#payment')
        })
    }

    static changeShippingMethod(){
        cy.get('#checkout-loader',{ timeout: 300000 }).should('not.exist')
        cy.get(checkoutSelectors.tablerateBestway).check()
        cy.get(checkoutSelectors.buttonNextShipping).click()
        cy.get(checkoutSelectors.changeShippingMeth).should('exist').click()
        cy.get(checkoutSelectors.tablerateFlatrate).click()
        cy.get(checkoutSelectors.buttonNextShipping).click().then(() => {
            cy.wait(5000);
            cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#payment')
        })
    }

    static placeOrderEnable(){
        cy.get(checkoutSelectors.buttonPlaceOrder).click({force: true})
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