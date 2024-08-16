import OrderListItem from "./OrderListItem"

function OrderList({orders}){
	return orders.map(order=><OrderListItem order={order} key={order.id}/>)
}

export default OrderList