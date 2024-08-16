import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import OrderListItem from './OrderListItem'

test('Muestra el título de la tienda', async () => {
  const theOrder = {
    "id": "1",
    "merchantImage": "https://res.cloudinary.com/caskchain/image/upload/v1717158058/Sequra/amazon.png",
    "merchantName": "Amazon",
    "merchantLogo": "https://cdn.iconscout.com/icon/free/png-512/free-amazon-1543560-1306063.png",
    "date": "2021-10-01",
    "nextDueAmount": 100,
    "nextDueDate": "2021-11-01",
    "status": "pending",
    "numberOfArticles": 5,
    "shippedArticles": 2
}
  render(<OrderListItem order={theOrder}/>)

  expect(screen.getByRole('heading')).toHaveTextContent('Amazon')
})