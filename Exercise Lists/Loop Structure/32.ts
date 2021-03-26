// 32. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:
// Fatorial de: 5
// 5! =  5 . 4 . 3 . 2 . 1 = 120

import scanf from 'scanf';

console.log('Informe o numero: ');
let num = scanf('%d');

const initialNumber = num;

let stringResult = num.toString();

for (let i = num - 1; i >= 1; i--) {

    num = num * i;
    stringResult = stringResult + ' . ' + i.toString();
}

console.log(`Fatorial de: ${initialNumber}
${initialNumber}! = ${stringResult} = ${num.toString()}`);