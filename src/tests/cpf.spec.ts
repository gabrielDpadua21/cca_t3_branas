import Cpf from '../Cpf';

describe('Test Cpf', () => {
    test('Should validate Cpf', () => {
        const cpf = new Cpf('935.411.347-80');
        expect(cpf.validate()).toBeTruthy();
    });

    test('Should try validate invalid cpf', () => {
        const cpf = new Cpf('123.456.789-99');
        expect(cpf.validate()).toBeFalsy();
    });

    test('Should try validate Cpf with all digits equals', () => {
        const cpf = new Cpf('111.111.111-11');
        expect(cpf.validate()).toBeFalsy();
    });

    test('Should try validate Cpf bigger than 11 chars', () => {
        const cpf = new Cpf('935.411.347-8000');
        expect(cpf.validate()).toBeFalsy();
    });

    test('Should try validate Cpf small than 11 chars', () => {
        const cpf = new Cpf('935.411.3');
        expect(cpf.validate()).toBeFalsy();
    });

    test('Should try validate Cpf null', () => {
        const cpf = new Cpf(null);
        expect(cpf.validate()).toBeFalsy();
    });

    test('Should try validate Cpf undefined', () => {
        const cpf = new Cpf(undefined);
        expect(cpf.validate()).toBeFalsy();
    }); 
});

