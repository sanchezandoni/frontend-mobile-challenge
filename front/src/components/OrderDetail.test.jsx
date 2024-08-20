import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import OrderDetail from './OrderDetail'

const theDefaultOrder = {
	"id": "1",
	"merchantImage": "https://res.cloudinary.com/caskchain/image/upload/v1717158058/Sequra/amazon.png",
	"merchantName": "Amazon",
	"merchantLogo": "https://cdn.iconscout.com/icon/free/png-512/free-amazon-1543560-1306063.png",
	"date": "2021-10-01",
	"nextDueAmount": 100,
	"nextDueDate": "2021-11-01",
	"status": "pending",
	"reference": "123456789",
	"price": 100,
	"numberOfArticles": 5,
	"shippedArticles": 2
}

test('Muestra el título de la tienda', async () => {
	const { container } = render(<OrderDetail orderData={theDefaultOrder} />)
	const header = container.querySelector("header")

	expect(within(header).getByRole('heading')).toHaveTextContent('Amazon')
})

test("Muestra la fecha de compra", async () => {
	const { container } = render(<OrderDetail orderData={theDefaultOrder} />)
	const header = container.querySelector("header")

	expect(within(header).getByRole('time')).toHaveTextContent('1 oct 2021')
})

test("Muestra el número de artículos", async () => {
	render(<OrderDetail orderData={theDefaultOrder} />)
	expect(screen.getByText('5 artículos')).toBeInTheDocument()
})

test("Muestra el número de artículos enviados", async () => {
	render(<OrderDetail orderData={theDefaultOrder} />)
	expect(screen.getByText('2/5 enviados')).toBeInTheDocument()
})

test("Muestra la fecha del próximo pago", async () => {
	const { container } = render(<OrderDetail orderData={theDefaultOrder} />)
	const main = container.querySelector("main")

	expect(within(main).getByRole('time')).toHaveTextContent('1noviembre')
})

test("Muestra la cantidad del próximo pago", async () => {
	const { container } = render(<OrderDetail orderData={theDefaultOrder} />)
	const main = container.querySelector("main")

	expect(within(main).getByText('Total: 100,00 €')).toBeInTheDocument()
})

test("Muestra correctamente el pedido completado", async () => {
	const theCompletedOrder = {
		...theDefaultOrder,
		status: "completed"
	}
	const { container } = render(<OrderDetail orderData={theCompletedOrder} />)
	const main = container.querySelector("main")

	expect(within(main).getByAltText('Icono de compra completada')).toBeInTheDocument()
	expect(within(main).getByText('Compra completada')).toBeInTheDocument()
	expect(within(main).getByRole('time')).toHaveTextContent('Pagado el 1 de noviembre')
})


test("Ejecuta la función payNowButtonClickHandler al hacer click en el botón de Pagar ahora", async () => {
	const handlerMock = jest.fn()
	const user = userEvent.setup()

	const { container } = render(<OrderDetail orderData={theDefaultOrder} payNowButtonClickHandler={handlerMock}/>)
	const payNowButton = container.querySelector("button.purchase-detail_payment-details_content-pending_pay-now-button")

	await user.click(payNowButton);

	expect(handlerMock).toHaveBeenCalled()
})

test("Ejecuta la función backButtonClickHandler al hacer click en el botón de retroceder", async () => {
	const handlerMock = jest.fn()
	const user = userEvent.setup()

	const { container } = render(<OrderDetail orderData={theDefaultOrder} backButtonClickHandler={handlerMock}/>)
	const goBackButton = container.querySelector("button.purchase-detail-header_back-button")

	await user.click(goBackButton);

	expect(handlerMock).toHaveBeenCalled()
})