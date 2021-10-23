
import OrderItem from './OrderItem';

describe('Test OrderItem', () => {
    test('Should create a item in order', () => {
        const orderItem = new OrderItem(1, 1000, 10);
        expect(orderItem.getTotal()).toBe(10000);
    })
})