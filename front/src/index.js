import { createRoot } from 'react-dom/client';
import App from "./App";
import GraphQlOrdersRepository from "./GraphQlOrdersRepository";

const root = createRoot(document.getElementById('app'));

const ordersRepository = new GraphQlOrdersRepository("http://localhost:4000/graphql")

root.render(<App ordersRepository={ordersRepository} />);
