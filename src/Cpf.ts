export default class Cpf {
    CPF_VALID_LENGTH: number = 11;
    FACTOR_FIRST_DIGIT: number = 10;
    FACTOR_SECOND_DIGIT: number = 11;
    private cpf: string;
    
    constructor(cpf: string) {
        if(!this.validate(cpf)) throw new Error('Invalid cpf');
        this.cpf = cpf;
    }

    validate(cpf: string) {
        if(!cpf) return false;
        const cleanCpf = this.clean(cpf);
        if(!this.isValidLength(cleanCpf)) return false;
        if(this.allDigitsEquals(cleanCpf)) return false;
        const firstDigit = this.calculateDigit(cleanCpf, this.FACTOR_FIRST_DIGIT);
        const secondDigit = this.calculateDigit(cleanCpf, this.FACTOR_SECOND_DIGIT);
        const verifierDigit = this.extractVerifierDigit(cleanCpf);
        const calculatedVerifiedDigit = `${firstDigit}${secondDigit}`;
        return verifierDigit == calculatedVerifiedDigit;
    }

    clean(cpf: string) {
        return cpf.replace(/\D/g, "");
    }

    isValidLength(cpf: string) {
        return cpf.length === this.CPF_VALID_LENGTH;
    }

    allDigitsEquals(cpf: string) {
        const [firstDigit] = cpf;
        return [...cpf].every((digit: string) => digit === firstDigit)
    }

    calculateDigit(cpf: string, factor: number) {
        let total = 0;
        [...cpf].map((digit: string) => {
            if (factor > 1) total += parseInt(digit) * factor--;
        });
        const rest = total % 11;
        return (rest < 2) ? 0 : (11 - rest);
    }

    extractVerifierDigit(cpf: string) {
        return cpf.slice(9);
    }
}