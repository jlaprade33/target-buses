import { HeaderImage } from './index'

describe('<HeaderImage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeaderImage />)
  })
})