const CPF_SIZE: number = 11;

export default class Cpf {

    isValid(cpf: string): boolean {
        cpf = this.treatSpecialChars(cpf);
        return this.verifyLetters(cpf) 
            && this.sizeValidate(cpf)
            && this.validateIfAllEquals(cpf) 
            && this.validateFirstDigite(cpf) 
            && this.validateSecondDigite(cpf);
    }

    sizeValidate(cpf: string): boolean {
        return cpf.length === CPF_SIZE;
    }

    verifyLetters(cpf: string): boolean {
        const regex = /[a-z]/gi;
        return !regex.test(cpf);
    }

    validateIfAllEquals(cpf: string): boolean {
        return !cpf.split('').every(digit => digit === cpf[0]);
    }

    validateFirstDigite(cpf: string): boolean {
        const cpfNoDigits = cpf.substring(0, 9);
        const cpfFirstDigite = cpf.substring(9, 10);
        return this.validateDigite(cpfNoDigits) === parseInt(cpfFirstDigite);
    }

    validateSecondDigite(cpf: string): boolean {
        const cpfWithFirstDigit = cpf.substring(0, 10);
        const cpfSecondDigite = cpf.substring(10, 11);
        return this.validateDigite(cpfWithFirstDigit) === parseInt(cpfSecondDigite);
    }

    validateDigite(cpf: string): number {
        const digitsSum = cpf.split('')
        .map((value, index, array) => parseInt(value) * (array.length - index + 1))
        .reduce((preview, next) => {
                return preview + next
        });
        return (digitsSum % 11) > 1 ? CPF_SIZE - (digitsSum % CPF_SIZE) : 0;
    }

    treatSpecialChars(cpf: string): string {
        return cpf.replace(/[^\w\s]/gi, '');
    }

}