import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import AllPurchases from './AllPurchases'

test('Muestra el título', async () => {
  const fakeRepository = {getOrders: function(){
    return Promise.resolve(
      [
        {
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
        },
        {
            "id": "2",
            "merchantImage": "https://res.cloudinary.com/caskchain/image/upload/v1717158059/Sequra/ebay.png",
            "merchantName": "Ebay",
            "merchantLogo": "https://cdn.iconscout.com/icon/free/png-512/free-ebay-13-675708.png",
            "date": "2021-10-01",
            "nextDueAmount": 200,
            "nextDueDate": "2021-11-01",
            "status": "completed",
            "numberOfArticles": 10,
            "shippedArticles": 5
        },
        {
            "id": "3",
            "merchantImage": "https://res.cloudinary.com/caskchain/image/upload/v1717158062/Sequra/costco.png",
            "merchantName": "Costco",
            "merchantLogo": "https://cdn.iconscout.com/icon/free/png-512/free-costco-282448.png",
            "date": "2023-05-30",
            "nextDueAmount": 300,
            "nextDueDate": "2024-11-01",
            "status": "pending",
            "numberOfArticles": 15,
            "shippedArticles": 7
        }
    ]
    )
  }}
  render(<AllPurchases ordersRepository={fakeRepository}/>)

  expect(screen.getByRole('heading')).toHaveTextContent('Orders')
})