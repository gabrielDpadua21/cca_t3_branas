import PlaceOrder from './PlaceOrder';
import ItemRepositoryMemory from './ItemRepositoryMemory';
import OrderRepositoryMemory from './OrderRepositoryMemory';

describe('Test Place Order', () => {
    test('Should make a order', async () => {
        const input = {
            cpf: '935.411.347-80',
            orderItems: [
                {
                    idItem: 1,
                    quantity: 1
                },
                {
                    idItem: 2,
                    quantity: 1
                },
                {
                    idItem: 3,
                    quantity: 1
                },
            ]
        }

        const placeOrder = new PlaceOrder(new ItemRepositoryMemory, new OrderRepositoryMemory);
        const output = await placeOrder.execute(input);
        expect(output.total).toBe(21500);
    });

});