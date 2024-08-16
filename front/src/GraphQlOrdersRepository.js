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

		}).then(res=>res.json())
		.then(data=>data.data.orders)
	}
}

export default GraphQlOrdersRepository;