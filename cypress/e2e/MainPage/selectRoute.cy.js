/// <reference types="cypress" />

describe('Transit flow', () => {
  beforeEach(() => {
    // first navigate to the app in the browser
    cy.visit('http://localhost:3000/')
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Select a Route Option', () => {
    // which are the two default items.
    cy.get('#PageHeader').should('exist')
    cy.get('#HeaderImage').should('exist')
    cy.get('#heading').should('exist')
    cy.get('#toggle').should('exist')

    // First step is to select an option from the Route Dropdown
    cy.get('#route-select').select('METRO Blue Line')
    cy.url().should('eq', 'http://localhost:3000/901')
  })

});