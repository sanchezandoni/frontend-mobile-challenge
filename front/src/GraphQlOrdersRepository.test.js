import GraphQlOrdersRepository from './GraphQlOrdersRepository'

var fetchMock;
beforeEach(() => {
	fetchMock = jest
		.spyOn(global, 'fetch')
		.mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve({ data: { data: { orders: [] } } }) })
		)
})

afterEach(() => {
	jest.restoreAllMocks()
});
test('getOrders llama a la dirección base con fetch', async () => {
	const fakeRepository = new GraphQlOrdersRepository("https://urlDeMentira.com")


	await fakeRepository.getOrders()

	expect(fetchMock).toHaveBeenCalledTimes(1)
	expect(fetchMock.mock.lastCall[0]).toEqual("https://urlDeMentira.com")
})

test('getOrderById llama a la dirección base con fetch', async () => {
	const fakeRepository = new GraphQlOrdersRepository("https://urlDeMentira.com")


	await fakeRepository.getOrderById(1)

	expect(fetchMock).toHaveBeenCalledTimes(1)
	expect(fetchMock.mock.lastCall[0]).toEqual("https://urlDeMentira.com")
})