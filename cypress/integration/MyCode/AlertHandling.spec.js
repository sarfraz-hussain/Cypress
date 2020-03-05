/// <reference types = "Cypress"/>

describe('UI Test for Daraz', function()
{
    it('Verify Page Title', function ()
        {
            cy.visit("https://www.piac.com.pk/")

            Cypress.on('uncaught:exception', (err) => 
            {
                cy.log('*** Alert Cleared ***')
                expect(err).contain("Attention Valued Passengers");
                return false;
            });

            cy.get('#popup > .im-close').click()
            cy.log('*** Alert Cleared ***')
            cy.get('#flightsearchbutton').click()

        })
            
})