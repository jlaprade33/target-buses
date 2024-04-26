/// <reference types="cypress" />

describe('Transit flow', () => {
    beforeEach(() => {
      // first navigate to the app in the browser
      cy.visit('http://localhost:3000/901/1')
      cy.url().should('eq', 'http://localhost:3000/901/1')
    });
  
    it('Select a Stop', () => {
      cy.get('#PageHeader').should('exist')
      cy.get('#HeaderImage').should('exist')
      cy.get('#heading').should('exist')
      cy.get('#toggle').should('exist')
  
      // Second step is to select an option from the Step Dropdown
      cy.get('#stop-select').select('U.S. Bank Stadium Station')
      cy.url().should('eq', 'http://localhost:3000/901/1/USBA')

      //Confirm display table is present
      cy.get('#display-table').should('exist')

      //Confirm Stop Header is correct
      cy.get('#stop-header').should('have.text', 'U.S. Bank Stadium Station')
      
      //Confirm Stop ID is correct
      cy.get('#stop-id').should('have.text', 56338)
    })
  
  });