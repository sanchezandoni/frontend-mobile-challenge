import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import AllPurchases from './AllPurchases'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<AllPurchases />)

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Orders')
})