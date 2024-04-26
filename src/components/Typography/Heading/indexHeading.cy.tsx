import { Heading } from './index'

const title = 'Heading Test';

describe('<Heading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Heading title={title} />)
  })
})