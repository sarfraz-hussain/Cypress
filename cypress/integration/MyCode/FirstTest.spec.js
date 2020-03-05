///<reference types = "cypress"/>

describe('UI Test for Daraz', function()
{
    it('Verify Page Title', function ()
        {
            cy.visit("www.daraz.pk")
            cy.title().should("eq", "Online Shopping in Pakistan: Fashion, Electronics & Books - Daraz.pk")
            cy.get("#q").type("bicycle")
            cy.get(".search-box__button--1oH7[data-spm-click='gostr=/lzdpub.header.search;locaid=d_go']").click()
            //cy.wait(10000)
            cy.get("[title='RAMBO X9 - Classic Sports Bicycle - Black and Red']").click()
            //cy.wait(10000)
            cy.get('.next-number-picker-input-wrap').type(2)
            cy.get('.pdp-button_theme_orange').click()



        })

        // it('Verify Page Title Negative-Test', function ()
        // {
        //     cy.visit("www.daraz.pk")
        //     cy.title().should('eq', 'Online Shopping in Pakistan Fashion, Electronics & Books - Daraz.pk')

        // })
            
})