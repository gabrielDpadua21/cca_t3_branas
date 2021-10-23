import Cupom from "./Cupom";

describe('Test Cupom', () => {
    test('Should create a valid cupom', () => {
        const cupom = new Cupom('VALE20', 20, new Date('2021-10-12'));
        const isExpired = cupom.isExpired(new Date('2021-09-10'));
        expect(isExpired).toBeFalsy();        
    })

    test('Should create a invalid cupom', () => {
        const cupom = new Cupom('VALE20', 20, new Date('2021-09-12'));
        const isExpired = cupom.isExpired(new Date('2021-10-10'));
        expect(isExpired).toBeTruthy();        
    })

    test('Should create a cupom with no expire date', () => {
        const cupom = new Cupom('VALE20', 20);
        const isExpired = cupom.isExpired();
        expect(isExpired).toBeFalsy();
    })
})