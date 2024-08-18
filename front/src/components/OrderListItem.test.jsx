import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import OrderListItem from './OrderListItem'

const theDefaultOrder = {
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

test('Muestra el título de la tienda', async () => {
	render(<OrderListItem order={theDefaultOrder} />)
	expect(screen.getByRole('heading')).toHaveTextContent('Amazon')
})

test("Muestra la fecha de compra", async () => {
	const { container } = render(<OrderListItem order={theDefaultOrder} />)
	const header = container.querySelector("header")

	expect(within(header).getByRole('time')).toHaveTextContent('1 oct 2021')
})

test("Muestra el número de artículos", async () => {
	render(<OrderListItem order={theDefaultOrder} />)
	expect(screen.getByText('5 artículos')).toBeInTheDocument()
})

test("Muestra la fecha del próximo pago", async () => {
	const { container } = render(<OrderListItem order={theDefaultOrder} />)
	const main = container.querySelector("main")

	expect(within(main).getByRole('time')).toHaveTextContent('1noviembre')
})

test("Muestra la cantidad del próximo pago", async () => {
	const { container } = render(<OrderListItem order={theDefaultOrder} />)
	const main = container.querySelector("main")

	expect(within(main).getByText('Cobro de:')).toBeInTheDocument()
	expect(within(main).getByText('100,00 €')).toBeInTheDocument()
})

test("Muestra correctamente los pedidos completados", async () => {
	const theCompletedOrder = {
		...theDefaultOrder,
		status: "completed"
	}
	const { container } = render(<OrderListItem order={theCompletedOrder} />)
	const main = container.querySelector("main")

	expect(within(main).getByAltText('Icono de compra completada')).toBeInTheDocument()
	expect(within(main).getByText('Compra completada')).toBeInTheDocument()
	expect(within(main).getByRole('time')).toHaveTextContent('1 nov 2021')
})