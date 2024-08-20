class GraphQlOrdersRepository {
	constructor(baseAddress) {
		this.baseAddress = baseAddress;
	}

	getOrders() {
		return fetch(this.baseAddress, {
			method: 'POST',

			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query: `{
					orders {
						id
						merchantImage
						merchantName
						merchantLogo
						date
						nextDueAmount
						nextDueDate
						status
						numberOfArticles
						shippedArticles
					}
				}`
			})

		}).then(res => res.json())
			.then(data => data.data.orders)
	}

	getOrderById(orderId) {
		return fetch(this.baseAddress, {
			method: 'POST',

			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query: `{
					orderById(orderId: ${orderId}) {
						id
						merchantImage
						merchantName
						merchantLogo
						date
						nextDueAmount
						nextDueDate
						status
						numberOfArticles
						shippedArticles
						reference
						price
					}
				}`
			})

		}).then(res => res.json())
			.then(data => data.data.orderById)
	}

	payOrderById(orderId) {
		return fetch(this.baseAddress, {
			method: 'POST',

			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query: `mutation PayOrder{
					payOrder(orderId: ${orderId}) {
						id
						merchantImage
						merchantName
						merchantLogo
						date
						nextDueAmount
						nextDueDate
						status
						reference
						price
						numberOfArticles
						shippedArticles
					}
				}`
			})
		}).then(res => res.json())
		.then(data => data.data.payOrder)
	}
}

export default GraphQlOrdersRepository;