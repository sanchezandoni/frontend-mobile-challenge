import { useState } from "react";
import AllPurchases from "./pages/AllPurchases";
import PurchaseDetail from "./pages/PurchaseDetail";

function App({ ordersRepository }) {
	const [selectedOrderId, setSelectedOrderId] = useState(null)

	return (<>
		{selectedOrderId === null && <AllPurchases ordersRepository={ordersRepository} orderSelectedHandler={setSelectedOrderId}/>}
		{selectedOrderId!==null && <PurchaseDetail ordersRepository={ordersRepository} orderId={selectedOrderId}/>}
	</>)
}

export default App;