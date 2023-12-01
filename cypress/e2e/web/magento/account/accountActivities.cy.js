import account from '../../../../fixtures/account.json'
import {Account} from '../../../../pageObjects/account.js'
import selectors from '../../../../fixtures/selectorAccount.json';

describe('Verify account activity with the condition that the account is registered', () => {
    beforeEach(() => {
        cy.wait(300)
        Account.userLogin(account.login.userValid.email, account.login.userValid.password)
        cy.wait(5000)
    })
    

    it('1 - Success check user profile', () => {
        cy.visit(account.url.accountEdit)
        Account.checkUserAllProfile()
        //cy.screenshot()
    })

    it('2 - Success change user password', () => {
        Account.userToClickChangePassword()
        cy.contains('Current Password').should('be.visible')
        cy.contains('New Password').should('be.visible')
        Account.changePassword(account.login.userValid.password, account.tempUserInfo.password)
        cy.contains('You saved the account information.').should('exist')
        Account.userLogin(account.login.userValid.email, account.tempUserInfo.password)
        // Change password back to first normal
        Account.userToClickChangePassword()
        Account.changePassword(account.tempUserInfo.password, account.login.userValid.password)
        cy.contains('You saved the account information.').should('exist')
        //cy.screenshot()
    })

   it('3 - Success change the user profile values', () => {
        let fn = account.tempUserInfo.firstname,
            ln = account.tempUserInfo.lastname
        cy.visit(account.url.accountEdit)
        Account.changeProfileValues(account.tempUserInfo.firstname, account.tempUserInfo.lastname)
        cy.wait(4000)
        Account.goToUserProfile()
        cy.get(selectors.accountFirstnameInputSelector).should('have.value', fn)
        cy.get(selectors.accountLastnameInputSelector).should('have.value', ln)
        cy.visit(account.url.accountEdit).then(() => {
            let fn = account.login.userValid.firstname,
                ln = account.login.userValid.lastname
            Account.changeProfileValues(fn, ln)
            cy.visit(account.url.accountEdit).then(() => {
                cy.get(selectors.accountFirstnameInputSelector).should('have.value', fn)
                cy.get(selectors.accountLastnameInputSelector).should('have.value', ln)
            })
            cy.wait(8000)
            cy.get('.page-header .customer-welcome > .customer-name > .action').click()
            cy.contains('Sign Out').click()
            //cy.screenshot()
        })
    })

    it('4 - Success add an user address', () => {
        Account.userCreateAddress(account.userInfo)
        cy.wait(3000)
        //cy.screenshot()
    })

    it('5 - Success change an user address', () => {
        const timeStamp = Date.now().toString()
        cy.visit(account.url.accountAddresses)
        cy.get(selectors.editAddress).first().click()
        cy.get(selectors.addressEditStreetInput).eq(0).type('- ' + timeStamp)
        cy.get(selectors.buttonSaveAddress).contains('Save Address').click()
        cy.contains('You saved the address.').should('exist')
        //cy.screenshot()
    })

    it('6 - Success remove an address after create user address', () => {
        Account.userCreateAddress(account.userInfo)
        cy.visit(account.url.accountAddresses)
        cy.wait(3500)
        cy.get(selectors.buttonLinkDeleteAddress).eq(0).click({force: true})
        cy.wait(1000)
        cy.contains('Are you sure you want to delete this address?')
        cy.get(selectors.buttonOkConfirmDeleteAddress).click()
        cy.wait(2500)
        //cy.screenshot()
    })

    it('7 - Success view user my order history', () => {
        Account.viewMainContentAccount(account.url.accountOrderHistory, 'You have placed no orders.')
        //cy.screenshot()
    })

    it('8 - Success view user my product reviews', () => {
        Account.viewMainContentAccount(account.url.review, 'You have submitted no reviews.')
        //cy.screenshot()
    })

    it('9 - Success view user my downloadable products', () => {
        Account.viewMainContentAccount(account.url.downloadable, 'You have not purchased any downloadable products yet.')
        //cy.screenshot()
    })

    it.only('10 - Success view user my wish list', () => {
        Account.viewMainContentAccount(account.url.wishlist, 'You have no items in your wish list.')
        //cy.screenshot()
    })

    it('11 - Success view user stored payment methods', () => {
        Account.viewMainContentAccount(account.url.payment, 'You have no stored payment methods.')
        //cy.screenshot()
    })

    it('12 - Success user log out', () => {
        Account.logout()
        cy.get(selectors.signedOutBase).should('contain.text', 'You are signed out')
        cy.wait(1000)
        //cy.screenshot()
    })
})