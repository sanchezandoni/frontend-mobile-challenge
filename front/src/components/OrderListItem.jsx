import bagIcon from "../assets/bag.svg"

function OrderListItem({order}){
	const headerStyles = {
		backgroundImage: `url('${order.merchantImage}')`
	}

	const date = new Date(order.date)
	const dateTextValue = date.toLocaleDateString('es-ES',{
		dateStyle: 'medium'
	})

	return (
		<div className="order-list-item">
			<header style={headerStyles}>
				{/* <img src={order.merchantImage} /> */}
				<div className="header-content">
					<h2>{order.merchantName}</h2>
					<time dateTime={dateTextValue}>{dateTextValue}</time>
					<span><img src={bagIcon} /> {order.numberOfArticles} artículos</span>
				</div>
				
				<img className="merchant-logo" src={order.merchantLogo} alt={`Logotipo de ${order.merchantName}`}/>
			</header>
			<main></main>
		</div>)
}

export default OrderListItem