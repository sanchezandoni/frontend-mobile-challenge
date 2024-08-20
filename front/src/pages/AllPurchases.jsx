import { useEffect, useState } from "react";
import OrderList from "../components/OrderList";

function AllPurchases({ ordersRepository, orderSelectedHandler }) {

	const [fetchedOrders,setFetchedOrders] = useState([])

	useEffect(()=>{
		ordersRepository.getOrders().then(setFetchedOrders)
	},[])

	return (<div className="all-purchases-page">
		<h1>Orders</h1>
		<OrderList orders={fetchedOrders} orderSelectedHandler={orderSelectedHandler}/>
	</div>)
}

export default AllPurchases;