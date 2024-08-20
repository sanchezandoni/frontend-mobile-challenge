import backIcon from "../assets/back.svg";
import receiptIcon from "../assets/receipt.svg";
import bagIcon from "../assets/bag_black.svg";
import truckIcon from "../assets/truck.svg";
import checkIcon from "../assets/check.svg";
import Precio from "./Precio";

function OrderDetail({ orderData, backButtonClickHandler, payNowButtonClickHandler }) {
	const headerStyles = {
		backgroundImage: `url('${orderData.merchantImage}')`
	}
	const orderDateTextValue = new Date(orderData.date).toLocaleDateString('es-ES', {
		dateStyle: 'medium'
	})

	return <div className="purchase-detail">
		<header className="purchase-detail-header" style={headerStyles}>
			<button onClick={backButtonClickHandler} className="purchase-detail-header_back-button"><img src={backIcon} alt="Icono de flecha señalando hacia la izquierda" /></button>
			<img className="purchase-detail-header_merchant-logo" src={orderData.merchantLogo} />
			<div className="purchase-detail-header_content">
				<h1 className="purchase-detail-header_content_merchant-name">{orderData.merchantName}</h1>
				<time className="purchase-detail-header_content_purchase-date">{orderDateTextValue}</time>
				<div className="purchase-detail-header_content_purchase-ref">ref. {orderData.reference}</div>
				<div className="purchase-detail-header_content_purchase-details">
					<div><img src={receiptIcon} /> <span><Precio precio={orderData.price} /></span></div>
					<div><img src={bagIcon} /> <span>{orderData.numberOfArticles} artículos</span></div>
					<div><img src={truckIcon} /> <span>{orderData.shippedArticles}/{orderData.numberOfArticles} enviados</span></div>
				</div>
			</div>
		</header>
		<main className="purchase-detail_payment-details">
			<h2 className="purchase-detail_payment-details_title">Estado del pago</h2>
			{orderData.status === "completed" && <CobroCompletado paymentDate={orderData.nextDueDate} />}
			{orderData.status === "pending" && <CobroProgramado orderData={orderData} payNowButtonClickHandler={payNowButtonClickHandler} />}
		</main>
	</div>
}

export default OrderDetail

function CobroProgramado({ orderData, payNowButtonClickHandler }) {
	const nextDueDate = new Date(orderData.nextDueDate);
	const orderDateTextValue = nextDueDate.toLocaleDateString('es-ES', {
		dateStyle: 'medium'
	})

	return (<div className="purchase-detail_payment-details_content-pending">
		<div className="purchase-detail_payment-details_content-pending_top-content">
			<div className="time-container">
				<time dateTime={orderDateTextValue}>
					<span className="date-number">{nextDueDate.getDay()}</span>
					<span className="date-month">{nextDueDate.toLocaleString('es-ES', { month: 'long' })}</span>
				</time>
			</div>

			<div className="purchase-detail_payment-details_content-pending_top-content_right">
				<div className="title">Cobro programado</div>
				<div>Recibirás la compra pronto</div>
			</div>
		</div>

		<div className="total">
			Total: <Precio precio={orderData.nextDueAmount} />
		</div>
		<button className="purchase-detail_payment-details_content-pending_pay-now-button" onClick={payNowButtonClickHandler}>Pagar ahora</button>
	</div>)
}

function CobroCompletado({ paymentDate }) {
	const orderDateTextValue = new Date(paymentDate).toLocaleDateString('es-ES', {
		day: 'numeric',
		month: 'long'
	})
	return (<div className="purchase-detail_payment-details_content-completed">
		<img src={checkIcon} alt="Icono de compra completada" />
		<div className="purchase-detail_payment-details_content-completed_content">
			<div className="purchase-detail_payment-details_content-completed_content_title">Compra completada</div>
			<time dateTime={new Date(paymentDate)}>Pagado el {orderDateTextValue}</time>
		</div>
	</div>
	)
}