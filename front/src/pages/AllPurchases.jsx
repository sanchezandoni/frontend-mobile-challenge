import { useEffect, useState } from "react";
import OrderList from "../components/OrderList";

function AllPurchases({ ordersRepository }) {

	const [fetchedOrders,setFetchedOrders] = useState([])

	useEffect(()=>{
		ordersRepository.getOrders().then(setFetchedOrders)
	},[])

	return (<>
		<h1>Orders</h1>
		<OrderList orders={fetchedOrders}/>
	</>)
}

export default AllPurchases;