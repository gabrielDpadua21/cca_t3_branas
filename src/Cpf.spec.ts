import Cpf from './Cpf';

describe('Test Cpf', () => {

    test('Shuold validate a valid cpf', () => {
        const cpf = new Cpf('935.411.347-80');
        expect(cpf).toBeDefined();
    })

    test('Should try validate invalid cpf', () => {
        expect(() => new Cpf('123.456.789-99')).toThrow(new Error("Invalid cpf"));
    });

    test('Should try validate Cpf with all digits equals', () => {
        expect(() => new Cpf('111.111.111-11')).toThrow(new Error("Invalid cpf"));
    });

    test('Should try validate Cpf bigger than 11 chars', () => {
        expect(() => new Cpf('935.411.347-8000')).toThrow(new Error("Invalid cpf"));
    });

    test('Should try validate Cpf small than 11 chars', () => {
        expect(() => new Cpf('935.411.3')).toThrow(new Error("Invalid cpf"));
    });
});

