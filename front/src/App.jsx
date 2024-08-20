import { useState } from "react";
import AllPurchases from "./pages/AllPurchases";
import PurchaseDetail from "./pages/PurchaseDetail";

function App({ ordersRepository }) {
	const [selectedOrderId, setSelectedOrderId] = useState(null)

	const backButtonClickHandler = function (e) {
		setSelectedOrderId(null)
	}

	return (<>
		{selectedOrderId === null && <AllPurchases ordersRepository={ordersRepository} orderSelectedHandler={setSelectedOrderId} />}
		{selectedOrderId !== null && <PurchaseDetail ordersRepository={ordersRepository} orderId={selectedOrderId} backButtonClickHandler={backButtonClickHandler} />}
	</>)
}

export default App;