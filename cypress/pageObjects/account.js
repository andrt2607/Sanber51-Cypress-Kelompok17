import selectors from '../fixtures/selectorAccount.json';
import account from '../fixtures/account.json';

export class Account{
    static createNewUser(firstName, lastName, email, pw) {
        cy.get(selectors.accountFirstnameInputSelector).type(firstName);
        cy.get(selectors.accountLastnameInputSelector).type(lastName);
        cy.get(selectors.accountEmailInputSelector).type(email);
        cy.get(selectors.newPasswordInputSelector).type(pw);
        cy.get(selectors.newPasswordConfirmationInputSelector).type(pw);
        cy.get(selectors.buttonCreateAnAccount).click();
    }

    static createNewUserStrengthPw(firstName, lastName, email, pw) {
        cy.get(selectors.accountFirstnameInputSelector).type(firstName);
        cy.get(selectors.accountLastnameInputSelector).type(lastName);
        cy.get(selectors.accountEmailInputSelector).type(email);
        cy.get(selectors.newPasswordInputSelector).type(pw);
        cy.get(selectors.newPasswordConfirmationInputSelector).type(pw);
    }

    static createNewUserPwConfNotSame(firstName, lastName, email, pw) {
        cy.get(selectors.accountFirstnameInputSelector).type(firstName);
        cy.get(selectors.accountLastnameInputSelector).type(lastName);
        cy.get(selectors.accountEmailInputSelector).type(email);
        cy.get(selectors.newPasswordInputSelector).type(pw);
        cy.get(selectors.newPasswordConfirmationInputSelector).type(pw+1);
        cy.get(selectors.buttonCreateAnAccount).click();
    }

    static selectorPasswordStrength(level){
        cy.get(selectors.accountPasswordStrength).contains('Password Strength: ' + level).should('exist')
    }

    static userLogin(email, pw) {
        cy.visit(account.url.accountLogin);
        cy.get(selectors.loginEmailInputSelector).type(email)
        cy.get(selectors.loginPasswordInputSelector).type(pw)
        cy.get(selectors.buttonSignInAccount).click();
    }

    static viewMainContentAccount(visitUrl, msgElse){
        cy.visit(visitUrl)
        cy.get(selectors.accountMainContain).then(($column) => {
            if ($column[0].querySelector(selectors.accountOrderProductToolbar)) {
                cy.log($column.find(selectors.accountOrderProductToolbar).text())
                expect(+$column[0].querySelector(selectors.accountOrderProductToolbar).innerText.trim().slice(0, 1)).to.be.at.least(1)
            } else {
                cy.contains(msgElse).should('exist')
            }
        })
    }

    static checkUserAllProfile() {
        cy.get(selectors.accountFirstnameInputSelector).should('be.visible')
        cy.get(selectors.accountLastnameInputSelector).should('be.visible')
        cy.contains('Change Email').should('be.visible').and('not.be.checked')
        cy.contains('Change Password').should('be.visible').and('not.be.checked')
    }

    static goToUserProfile() {
        cy.get('#block-collapsible-nav').contains('Account Information').click()
    }

    static changeProfileValues(firstName, lastName) {
        cy.get('#form-validate').within(($form) => {
            cy.get(selectors.accountFirstnameInputSelector).clear().type(firstName)
            cy.get(selectors.accountLastnameInputSelector).clear().type(lastName)
            cy.get(selectors.buttonSaveChangePassword).click()
        })
        cy.window().then((w) => w.initial = true)
    }
    

    static userToClickChangePassword(){
        cy.visit(account.url.accountEdit)
        cy.get(selectors.accountChangePassword).check({force: true})
    }
    
    static changePassword(pw, newPw) {
        cy.get(selectors.changePasswordFormSelector).within(($from) => {
            cy.get(selectors.currentPasswordInputSelector).type(pw)
            cy.get(selectors.newPasswordInputSelector).type(newPw)
            cy.get(selectors.newPasswordConfirmationInputSelector).type(newPw)
            cy.get(selectors.buttonSaveChangePassword).click()
        })
    }

    static userCreateAddress(userInfo) {
        cy.visit(account.url.accountAddAddress)
        cy.get(selectors.addAddressFormSelector).then(($form) => {
            if ($form.find(selectors.addAddressFormBilling).length) {
                cy.get(selectors.addAddressFormBilling).check()
                cy.get(selectors.addAddressFormShipping).check()
            }
            cy.get(selectors.addAddressFormStreet).type(userInfo.streetAddress)
            cy.get(selectors.addAddressFormCity).type(userInfo.city)
            cy.get(selectors.addAddressFormPhone).type(userInfo.phone)
            cy.get(selectors.addAddressFormZip).type(userInfo.zip)
            cy.get(selectors.addAddressFormCountry).select(userInfo.country)
            cy.contains('Save Address').click()
        })
    }

    static logout() {
        cy.get(selectors.accountMenuIcon).click()
        cy.get(selectors.accountMenuItems).contains('Sign Out').click();
    }

    static message(msg, tmOut){
        cy.contains(msg).should('exist')
        cy.wait(tmOut)
    }

}

export default Account;