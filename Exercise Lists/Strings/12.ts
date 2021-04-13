// 12. Valida e corrige número de telefone. Faça um programa que leia um número de telefone, e corrija o número no caso deste conter somente 7 dígitos, acrescentando o '3' na frente. O usuário pode informar o número com ou sem o traço separador.

// Valida e corrige número de telefone
// Telefone: 461-0133
// Telefone possui 7 dígitos. Vou acrescentar o digito três na frente.
// Telefone corrigido sem formatação: 34610133
// Telefone corrigido com formatação: 3461-0133

import scanf from "scanf";

console.log('Informe o número de telefone: ');
const phoneNumber = scanf('%S');

const result = formatingPhoneNumber(phoneNumber);

console.log(`Telefone Formatado: ${result}`);

function formatingPhoneNumber(phoneNum: string): string {

    let phoneFormated = '';

    if (phoneNum.length === 8 && phoneNum[3] === '-') {

        phoneFormated += '3' + phoneNum;

    } else if (phoneNum.length === 7) {

        const partNumber = phoneNum.slice(0, 3);
        const partNumber2 = phoneNum.slice(3, 7);

        phoneFormated += '3' + partNumber + '-' + partNumber2;

    } else if (phoneNum.length === 8 && phoneNum[3] !== '-') {

        const partNumber = phoneNum.slice(0, 4);
        const partNumber2 = phoneNum.slice(4, 8);

        phoneFormated += partNumber + '-' + partNumber2;
    } else {
        phoneFormated = phoneNum;
    }

    return phoneFormated;
}