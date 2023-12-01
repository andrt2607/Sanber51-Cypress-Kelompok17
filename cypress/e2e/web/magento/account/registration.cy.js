import {Account} from '../../../../pageObjects/account.js'
import account from '../../../../fixtures/account.json'

describe('Verify Magento Registration Account', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('')
    })
  
    it('1 - Success Create Account', () => {
        cy.clickRedirect()
        Account.createNewUser(account.registration.userValid.firstname, account.registration.userValid.lastname, Date.now() + account.registration.userValid.email, account.registration.userValid.password)
        Account.message('Thank you for registering with Main Website Store.', 1000)
        Account.logout()
    })

    it('2 - Success Check Password Strength - Medium Password', () => {
      cy.clickRedirect()
      Account.createNewUserStrengthPw(account.registration.userValid.firstname, account.registration.userValid.lastname, Date.now() + account.registration.userValid.email, account.registration.userValid.password)
      Account.selectorPasswordStrength('Medium')
    })

    it('3 - Success Check Password Strength - Strong Password', () => {
      cy.clickRedirect()
      Account.createNewUserStrengthPw(account.registration.userValid.firstname, account.registration.userValid.lastname, Date.now() + account.registration.userValid.email, account.registration.userValid.strongPassword)
      Account.selectorPasswordStrength('Strong')
    })

    it('4 - Success Check Password Strength - Very Strong Password', () => {
      cy.clickRedirect()
      Account.createNewUserStrengthPw(account.registration.userValid.firstname, account.registration.userValid.lastname, Date.now() + account.registration.userValid.email, account.registration.userValid.veryStrongPassword)
      Account.selectorPasswordStrength('Very Strong')
    })
    
    it('5 - Success Check Password Strength & Different Char - Weak Password & Min 3 Char Different', () => {
      cy.clickRedirect()
      Account.createNewUserStrengthPw(account.registration.userInvalid.firstname, account.registration.userInvalid.lastname, Date.now() + account.registration.userInvalid.email, account.registration.userInvalid.classCharPassword)
      Account.selectorPasswordStrength('Weak')
      Account.message('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.', 0)
    })

    it('6 - Failed Create Account - Use the Registered Email', () => {
      cy.clickRedirect()
      Account.createNewUser(account.registration.userInvalid.firstname, account.registration.userInvalid.lastname, account.registration.userInvalid.email, account.registration.userInvalid.password)
      Account.message('There is already an account with this email address', 1000)
    })

    it('7 - Failed Create Account - Email Invalid', () => {
      cy.clickRedirect()
      Account.createNewUser(account.registration.userInvalid.firstname, account.registration.userInvalid.lastname, Date.now() + account.registration.userInvalid.invalidEmail, account.registration.userInvalid.password)
      Account.message('Please enter a valid email address (Ex: johndoe@domain.com).', 1000)
    })

    it('8 - Failed Create Account - First/Last Name & Email Password is Mandatory', () => {
      cy.clickRedirect()
      Account.createNewUser(" ", " ", Date.now() + account.registration.userInvalid.email, account.registration.userInvalid.password)
      Account.message('This is a required field.', 1000)
    })

    it('9 - Failed Create Account - Length Less Than 8', () => {
      cy.clickRedirect()
      Account.createNewUser(account.registration.userInvalid.firstname, account.registration.userInvalid.lastname, Date.now() + account.registration.userInvalid.email, account.registration.userInvalid.invalidPassword)
      Account.message('Minimum length of this field must be equal or greater than 8 symbols.', 1000)
    })

    it('10 - Failed Create Account - Password & Confirm Password Not Same', () => {
      cy.clickRedirect()
      Account.createNewUserPwConfNotSame(account.registration.userValid.firstname, account.registration.userValid.lastname, Date.now() + account.registration.userValid.email, account.registration.userValid.password)
      Account.message('Please enter the same value again.', 0)
  })

  })