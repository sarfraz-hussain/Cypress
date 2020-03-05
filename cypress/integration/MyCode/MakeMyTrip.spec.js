///<reference types = "Cypress"/>
describe('landing Page Test', function()
{
    it('Book flight', function()
    {

        cy.visit("http://newtours.demoaut.com/")
        //cy.get('#popup > .im-close').click // close popup
        cy.title().should('eq', "Welcome: Mercury Tours")

        cy.get('input[name=userName]') //verify Username Field is visible and enabled
          .should("be.enabled")
          .should("be.visible")
          .type("mercury")

        cy.get('input[name=password]') //verify Password Field is visible and enabled
          .should("be.enabled")
          .should("be.visible")
          .type("mercury")

        cy.get('input[name=login]') //verify Password Field is visible and enabled
          .should("be.enabled")
          .should("be.visible")
          .click()

        cy.title().should("include","Find a Flight: Mercury Tours" )

        // booking page Radio Button Controls
        cy.get('input[value=roundtrip]')
          .should("be.visible")
          .should("be.enabled")
          .should("be.checked")

        cy.get('input[value=oneway]')
          .should("be.visible")
          .should("be.enabled")
          .should("not.be.checked")
          .click()        






        



    })
    


})
