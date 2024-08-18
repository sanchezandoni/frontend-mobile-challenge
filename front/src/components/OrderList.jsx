import OrderListItem from "./OrderListItem"

function OrderList({orders}){
	return <div className="order-list">{orders.map(order=><OrderListItem order={order} key={order.id}/>)}</div>
}

export default OrderList