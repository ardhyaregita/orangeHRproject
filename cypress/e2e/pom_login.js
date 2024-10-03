export class LoginPage{

    loginTextboxUsername = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginTextboxPassword = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButtonLogin = '.oxd-button'

    enterUsername(username){

        cy.get(this.loginTextboxUsername).type(username)
       

    }

    enterPassword(password){

        cy.get(this.loginTextboxPassword).type(password)
       

    }

    clickButtonLogin(){

        cy.get(this.loginButtonLogin).click()
       

    }
}