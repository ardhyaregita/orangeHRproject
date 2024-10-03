require('cypress-xpath')

describe('Page Admin - User Management', () => {

    beforeEach(() => {
        cy.login('Admin', 'admin123')
      })


    it('Add New User', () => {


        //Go to Admin - User Management

        cy.contains('Admin').click()
        cy.contains('System User').should('be.visible')

        //Add new user



        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.contains('Add User')

        cy.contains('.oxd-select-text-input', 'Select').click()
        cy.get('.oxd-select-dropdown').contains('Admin').click()

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').contains('Enabled').click()

        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123')

        cy.get('.oxd-autocomplete-text-input > input').type('James')
        cy.get('.oxd-autocomplete-dropdown').contains('James Butler').click()
        
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('TestUser 1')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button--secondary').click()
        
        cy.contains('Successfully Saved').should('be.visible')

        cy.wait(7000)

        
        //Check the data that just created on the table
        cy.contains('TestUser 1').should('be.visible')

    })

 
    
    it('Edit New User', () => {

        //Go to Admin - User Management

        cy.contains('Admin').click()
        cy.contains('System User').should('be.visible')

        //Edit the data
        cy.contains('TestUser 1').then(($userElement) => {  
        cy.wrap($userElement).closest('.oxd-table-row') 
              .find('.bi-pencil-fill') 
              .click()
        })

        cy.contains('.oxd-select-text-input', 'Admin').click()
        cy.get('.oxd-select-dropdown').contains('ESS').click()

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').contains('Disabled').click()
        
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Peter Anderson edited')

        cy.get('.oxd-button--secondary').click()

        cy.contains('Successfully Updated').should('be.visible')

        cy.wait(7000)

    })



    it('Delete New User', () => {

        //Go to Admin - User Management

        cy.contains('Admin').click()
        cy.contains('System User').should('be.visible')

        //Delete the data 

        cy.contains('A8DCo 010Z').then(($userElement) => {  
            cy.wrap($userElement).closest('.oxd-table-row') 
                  .find('.bi-trash') 
                  .click()
            })
        
        cy.get('.oxd-button--label-danger')
            //.contains('Yes, Delete')
            .click()

        cy.contains('Successfully Deleted').should('be.visible')

        cy.wait(7000)

    })



})