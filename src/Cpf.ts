const CPF_VALID_LENGTH = 11;
const FACTOR_FIRST_DIGIT = 10;
const FACTOR_SECOND_DIGIT = 11;

export default class Cpf {
    private cpf: string;

    constructor(cpf: any) {
        this.cpf = cpf;
    }

    validate() {
        if(!this.cpf) return false;
        this.cpf = this.clean();
        if(!this.isValidLength()) return false;
        if(this.allDigitsEquals()) return false;
        const firstDigit = this.calculateDigit(FACTOR_FIRST_DIGIT);
        const secondDigit = this.calculateDigit(FACTOR_SECOND_DIGIT);
        const verifierDigit = this.extractVerifierDigit();
        const calculatedVerifiedDigit = `${firstDigit}${secondDigit}`;
        return verifierDigit == calculatedVerifiedDigit;
    }

    clean() {
        return this.cpf.replace(/\D/g, "");
    }

    isValidLength() {
        return this.cpf.length === CPF_VALID_LENGTH;
    }

    allDigitsEquals() {
        const [firstDigit] = this.cpf;
        return [...this.cpf].every((digit: string) => digit === firstDigit)
    }

    calculateDigit(factor: number) {
        let total = 0;
        [...this.cpf].map((digit: string) => {
            if (factor > 1) total += parseInt(digit) * factor--;
        });
        const rest = total % 11;
        return (rest < 2) ? 0 : (11 - rest);
    }

    extractVerifierDigit() {
        return this.cpf.slice(9);
    }
}