// 9. Verificação de CPF. Desenvolva um programa que solicite a digitação de um número de CPF no formato xxx.xxx.xxx-xx e indique se é um número válido ou inválido através da validação dos dígitos verificadores edos caracteres de formatação.

import scanf from "scanf";

while (true) {

    console.log('Informe o CPF:(No padrão XXX.XXX.XXX-XX) ');
    const cpf = scanf('%S');

    const state = cpfState(cpf);
    const valid = validateCpf(cpf);

    if (valid) {
        console.log('Cpf Valido!', state);
    } else {
        console.log('Cpf Invalido! Digite Novamente:');
    }
}


function cpfState(cpfCode: string): string {

    let result = '';

    if (cpfCode[10] === '0') {
        result = 'Cpf do Rio Grande do Sul.';

    } else if (cpfCode[10] === '1') {
        result = 'Cpf do Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins.';

    } else if (cpfCode[10] === '2') {
        result = 'Cpf do Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia.';

    } else if (cpfCode[10] === '3') {
        result = 'Cpf do Ceará, Maranhão ou Piauí.';

    } else if (cpfCode[10] === '4') {
        result = 'Cpf da Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte.';

    } else if (cpfCode[10] === '5') {
        result = 'Cpf da Bahia ou Sergipe.';

    } else if (cpfCode[10] === '6') {
        result = 'Cpf de Minas Gerais.';

    } else if (cpfCode[10] === '7') {
        result = 'Cpf do Rio de Janeiro ou Espirito Santo.';

    } else if (cpfCode[10] === '8') {
        result = 'Cpf de São Paulo.';

    } else if (cpfCode[10] === '9') {
        result = 'Cpf do Paraná ou Santa Catarina.';

    }

    return result;
}

function validateCpf(cpfCode: string): boolean {

    const cpfInteger: number[] = [];
    const cpfOutSpecialChars = cpfCode.replace('.', '').replace('.', '').replace('-', '').substring(0, 9);
    const firstVerifyingDigit = parseInt(cpfCode.slice(12, 13), 10);
    const secondVerifyingDigit = parseInt(cpfCode.slice(13, 14), 10);

    let sumFirstDigit = 0;
    let sumSecondDigit = 0;

    let firstCheckDigit = 0;
    let secondCheckDigit = 0;

    if (cpfCode.length !== 14) {
        return false;
    }


    for (let i = 0; i < cpfOutSpecialChars.length; i++) {
        cpfInteger.push(parseInt(cpfOutSpecialChars[i], 10));
    }


    for (let j = 10; j >= 2;) {
        for (let x = 0; x < cpfInteger.length; x++) {
            sumFirstDigit += cpfInteger[x] * j;
            j--;
        }
    }


    if (sumFirstDigit % 11 === 0 || sumFirstDigit % 11 === 1) {
        firstCheckDigit = 0;
        cpfInteger.push(firstCheckDigit);
    } else {
        firstCheckDigit = 11 - (sumFirstDigit % 11);
        cpfInteger.push(firstCheckDigit);
    }

    for (let y = 11; y >= 2;) {
        for (let z = 0; z < cpfInteger.length; z++) {
            sumSecondDigit += cpfInteger[z] * y;
            y--;
        }
    }

    if (sumSecondDigit % 11 === 0 || sumSecondDigit === 1) {
        secondCheckDigit = 0;
    } else {
        secondCheckDigit = 11 - (sumSecondDigit % 11);
    }


    if (firstCheckDigit === firstVerifyingDigit || secondCheckDigit === secondVerifyingDigit) {
        return true;
    }
    return false;
}