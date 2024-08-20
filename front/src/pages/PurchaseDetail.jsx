import { useEffect, useState } from "react"
import OrderDetail from "../components/OrderDetail"

function PurchaseDetail({ ordersRepository, orderId, backButtonClickHandler }) {
	const [orderData, setOrderData] = useState(null)

	async function payNowButtonClickHandler(ev){
		const newOrderData = await ordersRepository.payOrderById(orderId)
		setOrderData(newOrderData)
	}

	useEffect(() => {
		ordersRepository.getOrderById(orderId).then(setOrderData)
	}, [orderId])

	return (<>
		{!orderData && "Cargando"}
		{orderData && <OrderDetail orderData={orderData} backButtonClickHandler={backButtonClickHandler} payNowButtonClickHandler={payNowButtonClickHandler}/>}
	</>)

}

export default PurchaseDetail