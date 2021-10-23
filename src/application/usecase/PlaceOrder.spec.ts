
import ItemRepositoryMemory from "@/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "@/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "./PlaceOrder";

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