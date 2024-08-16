import GraphQlOrdersRepository from './GraphQlOrdersRepository'

test('llama a la dirección base con fetch', async () => {
	const fetchMock = jest
		.spyOn(global, 'fetch')
		.mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve({ data: { data: { orders: [] } } }) })
		)
	const fakeRepository = new GraphQlOrdersRepository("https://urlDeMentira.com")


	await fakeRepository.getOrders()

	expect(fetchMock).toHaveBeenCalledTimes(1)
	expect(fetchMock.mock.lastCall[0]).toEqual("https://urlDeMentira.com")
})