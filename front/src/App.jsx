import { useState } from "react";
import AllPurchases from "./pages/AllPurchases";

function App({ ordersRepository }) {
	const [selectedOrderId, setSelectedOrderId] = useState(null)
	return (<>
		{selectedOrderId === null && <AllPurchases ordersRepository={ordersRepository} />}
	</>)
}

export default App;