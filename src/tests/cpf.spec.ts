import Cpf from '@/domain/cpf';


describe('Test cpf validations', () => {
    
    test('Should recive a valide size cpf', () => {
        const cpf = new Cpf();
        expect(cpf.sizeValidate('40819992879')).toBeTruthy();
    });

    test('should recive a not valide size cpf', () => {
        const cpf = new Cpf();
        expect(cpf.sizeValidate('408199928')).toBeFalsy();
    })
    
    test('should not receive letters in cpf', () => {
        const cpf = new Cpf();
        expect(cpf.verifyLetters('408199928A')).toBeFalsy();
    })

    test('should return false when all digits are equal', () => {
        const cpf = new Cpf();
        expect(cpf.validateIfAllEquals('11111111111')).toBeFalsy();
    })
    
    
    test('should receive cpf with first digit valid', () => {
        const cpf = new Cpf();
        expect(cpf.validateFirstDigite('40819992879')).toBeTruthy();
    });

    test('should receive cpf with second digit valide', () => {
        const cpf = new Cpf();
        expect(cpf.validateSecondDigite('40819992879')).toBeTruthy();
    });
})


describe('Test cpf', () => {
    test('should receice a invalid cpf', () => {
        const cpf = new Cpf();
        expect(cpf.isValid('111.111.111-11')).toBeFalsy();
    })

    test('should receice a valid cpf', () => {
        const cpf = new Cpf();
        expect(cpf.isValid('935.411.347-80')).toBeTruthy();
    })    
})

