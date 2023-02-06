// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

beforeEach(() => {

  cy.session('login', () => {

    cy.visit(Cypress.env('url'))
    //cy.visit(url)
    cy.get("input[name='username']").type('trushita.gadkari')
    cy.get("input[name='password']").type('hl4b2wx6{enter}')
    // cy.get("#submit1").click()
    cy.contains("Change").click()
    Cypress.config('defaultCommandTimeout', 15000);
    cy.get('td[class="action"] div a span').eq(6).click({ force: true })
    /* cy.get('td[class="span-8"] div').each(($el, index, $list) => {

        if ($el.text().includes('Aston Barclay Leeds')) {
          // cy.contains("Select").eq(index).click()
          cy.get('td[class="action"] div a span').contains('Select').eq(index).click()
    
        }
    
    
      }) */


  })

})


