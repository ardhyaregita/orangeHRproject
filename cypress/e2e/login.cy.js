import { LoginPage } from "./pom_login"

describe('Login', () => {

    const loginPage = new LoginPage()

    it('Login with invalid credential', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.wait(5000)


        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickButtonLogin()
        cy.contains('Invalid credentials').should('be.visible')
    })

    it('Login with empty password', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.wait(5000)

        loginPage.enterUsername('Admin123')
        loginPage.enterPassword(' ')
        loginPage.clickButtonLogin()
        cy.contains('Required').should('be.visible')
    })

    it('Login with valid credentials',() => {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.wait(5000)

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickButtonLogin()
        cy.contains('Dashboard').should('be.visible')


    })

       

      
  })