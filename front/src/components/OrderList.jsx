import OrderListItem from "./OrderListItem"

function OrderList({orders, orderSelectedHandler}){
	return <div className="order-list">{orders.map(order=>{
		function currentOrderSelectedHandler(){
			orderSelectedHandler(order.id)
		}
		return <OrderListItem order={order} key={order.id} onOrderSelected={currentOrderSelectedHandler}/>
	})}</div>
}

export default OrderList