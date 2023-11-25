import selectors from '../fixtures/selectorAccount.json';

export class Account{
    static createNewUser(firstName, lastName, email, pw) {
        cy.get(selectors.accountFirstnameInputSelector).type(firstName);
        cy.get(selectors.accountLastnameInputSelector).type(lastName);
        cy.get(selectors.accountEmailInputSelector).type(email);
        cy.get(selectors.newPasswordInputSelector).type(pw);
        cy.get(selectors.newPasswordConfirmationInputSelector).type(
            `${pw}{enter}`
        );
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
        cy.get(selectors.newPasswordConfirmationInputSelector).type(
            `${pw}+1{enter}`
        );
    }

    static selectorPasswordStrength(level){
        cy.get(selectors.accountPasswordStrength).contains('Password Strength: ' + level).should('exist')
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