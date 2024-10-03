require('cypress-xpath')

describe('Page Admin - User Management', () => {

    beforeEach(() => {
        cy.login('Admin', 'admin123')
      })


    it('Add New Employee', () => {

        cy.contains('PIM').click()
        cy.contains('Employee Information').should('be.visible')

        cy.get('.oxd-topbar-body-nav-tab-item').click()
        cy.contains('Add Employee').should('be.visible')

        cy.contains('First Name').click().type('Edward')
        cy.contains('Middle Name').click().type('Cullen')
        cy.contains('Last Name').click().type('V')

        cy.get('.oxd-switch-input--active --label-right').click()

        cy.get('oxd-input--active').type('edward')
        cy.get('input[type="password"]').type('edward123')
        
        
        
        






    })

})