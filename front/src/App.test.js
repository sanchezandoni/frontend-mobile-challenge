import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import React from "react";
import App from './App'

const fakeRepository = {
  getOrders: function () {
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
  }
}

test('Muestra el listado de encargos', async () => {
  render(<App ordersRepository={fakeRepository} />)

  expect(screen.getByRole('heading')).toHaveTextContent('Orders')
})

jest.mock("./pages/PurchaseDetail", () => {
  const PurchaseDetail = ({ordersRepository,orderId}) => <div data-testid="PurchaseDetail">Detalles de la compra con id {orderId}</div>;
  return PurchaseDetail
});

test('Al hacer click en un encargo del listado, muestra los detalles del encargo', async () => {
  const user = userEvent.setup()

  const { getByTestId } = render(<App ordersRepository={fakeRepository} />)
  
  expect(await screen.findByText("Amazon")).toBeInTheDocument();
  const orderListItem = screen.getByText("Amazon")
  await user.click(orderListItem);

  expect(getByTestId("PurchaseDetail")).toBeInTheDocument();
  expect(screen.getByText("Detalles de la compra con id 1")).toBeInTheDocument()
  
})