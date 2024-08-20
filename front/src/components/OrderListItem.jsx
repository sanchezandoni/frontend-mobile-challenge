import bagIcon from "../assets/bag.svg"
import checkIcon from "../assets/check.svg"
import Precio from "./Precio"

function OrderListItem({ order, onOrderSelected }) {
	const headerStyles = {
		backgroundImage: `url('${order.merchantImage}')`
	}

	const orderDate = new Date(order.date)
	const orderDateTextValue = orderDate.toLocaleDateString('es-ES', {
		dateStyle: 'medium'
	})

	const nextDueDate = new Date(order.nextDueDate)
	const statusCompleted = order.status === "completed"


	return (
		<div className="order-list-item" onClick={onOrderSelected}>
			<header style={headerStyles}>
				{/* <img src={order.merchantImage} /> */}
				<div className="header-content">
					<h2>{order.merchantName}</h2>
					<time dateTime={orderDateTextValue}>{orderDateTextValue}</time>
					<span><img src={bagIcon} /> {order.numberOfArticles} artículos</span>
				</div>

				<img className="merchant-logo" src={order.merchantLogo} alt={`Logotipo de ${order.merchantName}`} />
			</header>

			{!statusCompleted && (<main>
				<div className="time-container">
					<time dateTime={orderDateTextValue}>
						<span className="date-number">{nextDueDate.getDay()}</span>
						<span className="date-month">{nextDueDate.toLocaleString('es-ES', { month: 'long' })}</span>
					</time></div>
				<div className="cobro">
					<span className="cobro-title">Cobro de:</span>
					<span className="cobro-qty"><Precio precio={order.nextDueAmount} /></span>
				</div>

			</main>
			)}
			{statusCompleted && (<main>
				<img src={checkIcon} alt="Icono de compra completada" />
				<div className="compra-completada">
					<span className="compra-completada-title">Compra completada</span>
					<time className="compra-completada-date" dateTime={order.nextDueDate}>{(new Date(order.nextDueDate)).toLocaleDateString('es-ES', {
						dateStyle: 'medium'
					})}</time>
				</div>
			</main>

			)}
		</div>)
}

export default OrderListItem