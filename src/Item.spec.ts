import Item from "./Item";


describe('Test item', () => {
    test('Should create item', () => {
        const item = new Item(1, 'Tecnologia', 'Iphone 12', 5000);
        expect(item.idItem).toBe(1)
    });

    test('Should create item and calculate volume', () => {
        const item = new Item(1, 'Tecnologia', 'Iphone 12', 5000, 100, 30, 10);
        const volume = item.getVolume();
        expect(volume).toBe(0.03);
    });

    test('Should create item and calculate density', () => {
        const item = new Item(1, 'Tecnologia', 'Iphone 12', 5000, 100, 30, 10, 3);
        const volume = item.getDensity();
        expect(volume).toBe(100);
    });

    test('Should create item and calculate a freight', () => {
        const item = new Item(1, 'Tecnologia', 'Iphone 12', 5000, 100, 30, 10, 3);
        const freight = item.getFreight();
        expect(freight).toBe(30);
    });

    test('Should create item and calculate a min freight', () => {
        const item = new Item(2, 'Tecnologia', 'USB-C', 30, 10, 10, 10, 0.9);
        const freight = item.getFreight();
        expect(freight).toBe(10);
    });
});