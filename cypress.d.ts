declare namespace Cypress {
    interface Chainable {
      mount(component: JSX.Element): Chainable<Element>;
    }
  }