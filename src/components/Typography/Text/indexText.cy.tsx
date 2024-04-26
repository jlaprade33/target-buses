import { Text } from './index'

const text = 'Text Test';

describe('<Text />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Text text={text} />)
  })
})