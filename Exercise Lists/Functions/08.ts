// 8. Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.

import scanf from "scanf";

let num: number = 0;
let convert: string;
let count: number = 0;

console.log('Informe o numero: ');
num = scanf('%d');

convert = num.toString();

amountNum(convert);

console.log('Quantidade de digitos: ' + count);

function amountNum(txt: string): void {
    for (let i = 0; i < txt.length; i++) {
        count++;
    }
}