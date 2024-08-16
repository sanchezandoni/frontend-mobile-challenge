import GraphQlOrdersRepository from "./OrdersRepository";
import AllPurchases from "./pages/AllPurchases";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));

const ordersRepository = new GraphQlOrdersRepository("http://localhost:4000/graphql")
ordersRepository.getOrders().then(console.log);

root.render(<AllPurchases ordersRepository={ordersRepository}/>);
