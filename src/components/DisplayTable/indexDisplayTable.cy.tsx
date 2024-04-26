import { DisplayTable } from './index'
import { testData } from '../../constants';

describe('<DisplayTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DisplayTable tableData={testData} />)
  })
})