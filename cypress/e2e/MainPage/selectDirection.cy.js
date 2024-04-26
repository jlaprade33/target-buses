/// <reference types="cypress" />

describe('Transit flow', () => {
    beforeEach(() => {
      // first navigate to the app in the browser
      cy.visit('http://localhost:3000/901')
      cy.url().should('eq', 'http://localhost:3000/901')
    });
  
    it('Select a Direction', () => {
      // which are the two default items.
      cy.get('#PageHeader').should('exist')
      cy.get('#HeaderImage').should('exist')
      cy.get('#heading').should('exist')
      cy.get('#toggle').should('exist')
  
      // Second step is to select an option from the Step Dropdown
      cy.get('#direction-select').select('Southbound')
      cy.url().should('eq', 'http://localhost:3000/901/1')
    })
  
  });