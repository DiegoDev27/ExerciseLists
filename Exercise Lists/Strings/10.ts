// 10. Número por extenso. Escreva um programa que solicite ao usuário a digitação de um número até 99 e imprima-o na tela por extenso.

import scanf from "scanf";

const vecNumbers = {
    0: 'Zero',
    1: 'Um',
    2: 'Dois',
    3: 'Três',
    4: 'Quatro',
    5: 'Cinco',
    6: 'Seis',
    7: 'Sete',
    8: 'Oito',
    9: 'Nove',
    10: 'Dez',
    11: 'Onze',
    12: 'Doze',
    13: 'Treze',
    14: 'Catorze',
    15: 'Quinze',
    16: 'Dezesseis',
    17: 'Dezessete',
    18: 'Dezoito',
    19: 'Dezenove',
    20: 'Vinte',
    30: 'Trinta',
    40: 'Quarenta',
    50: 'Cinquenta',
    60: 'Sessenta',
    70: 'Setenta',
    80: 'Oitenta',
    90: 'Noventa',
};


let readNumber: string;

console.log('Informe o numero: ');
readNumber = scanf('%S');


const result = numberInFull(readNumber, vecNumbers);

console.log(result);

function numberInFull(numString: string, vec: any) {

    let secondNumber = '';
    let firstNumber = numString[0];

    if (numString.length > 1) {
        firstNumber = firstNumber + '0';
        secondNumber = numString[1];
    }

    if (firstNumber === '10' && secondNumber === '1') {
        return vec[11];
    }

    if (firstNumber === '10' && secondNumber === '2') {
        return vec[12];
    }

    if (firstNumber === '10' && secondNumber === '3') {
        return vec[13];
    }

    if (firstNumber === '10' && secondNumber === '4') {
        return vec[14];
    }

    if (firstNumber === '10' && secondNumber === '5') {
        return vec[15];
    }

    if (firstNumber === '10' && secondNumber === '6') {
        return vec[16];
    }

    if (firstNumber === '10' && secondNumber === '7') {
        return vec[17];
    }

    if (firstNumber === '10' && secondNumber === '8') {
        return vec[18];
    }

    if (firstNumber === '10' && secondNumber === '9') {
        return vec[19];
    }

    if (parseInt(numString, 10) % 10 === 0) {
        return vec[firstNumber];
    }

    return vec[firstNumber] + ' e ' + vec[secondNumber];
}