import Cupom from "./Cupom";
import Item from "./Item";
import Order from "./Order";

describe('Test Order', () => {

    test('Should not create a order with invalid Cpf', () => {
        expect(() => new Order('111.111.111-11')).toThrow(new Error('Invalid cpf'));
    });

    test('Should create a order', () => {
        const order = new Order('935.411.347-80');
        expect(order).toBeDefined();
    });

    test('Should create a order with 3 itens', () => {
        const order = new Order('935.411.347-80');
        order.addItem(new Item(1, 'Tecnologia', 'Iphone 12', 5000), 1);
        order.addItem(new Item(2, 'Tecnologia', 'AirPods', 1500), 1);
        order.addItem(new Item(3, 'Tecnologia', 'MacBook', 15000), 1);
        const total = order.getTotal();
        expect(total).toBe(21500);
    });

    test('Should create a order with 3 itens and applicate cupom', () => {
        const order = new Order('935.411.347-80');
        order.addItem(new Item(1, 'Tecnologia', 'Iphone 12', 5000), 1);
        order.addItem(new Item(2, 'Tecnologia', 'AirPods', 1500), 1);
        order.addItem(new Item(3, 'Tecnologia', 'MacBook', 15000), 1);
        order.addCupom(new Cupom('VALE20', 20));
        const total = order.getTotal();
        expect(total).toBe(17200);
    });

    test('Should create a order with 3 itens and applicate cupom with expire date', () => {
        const order = new Order('935.411.347-80', new Date('2021-10-10'));
        order.addItem(new Item(1, 'Tecnologia', 'Iphone 12', 5000), 1);
        order.addItem(new Item(2, 'Tecnologia', 'AirPods', 1500), 1);
        order.addItem(new Item(3, 'Tecnologia', 'MacBook', 15000), 1);
        order.addCupom(new Cupom('VALE20', 20, new Date('2021-03-01')));
        const total = order.getTotal();
        expect(total).toBe(21500);
    });

    test('Should create a order with 3 itens ', () => {
        const order = new Order('935.411.347-80');
        order.addItem(new Item(1, 'Tecnologia', 'Iphone 12', 5000, 100, 30, 10, 3), 1);
        order.addItem(new Item(2, 'Tecnologia', 'AirPods', 1500, 10, 10, 10, 0.9), 1);
        order.addItem(new Item(3, 'Tecnologia', 'MacBook', 15000, 100, 50, 50, 20), 1);
        const freight = order.getFreight();
        expect(freight).toBe(200);
    });

});