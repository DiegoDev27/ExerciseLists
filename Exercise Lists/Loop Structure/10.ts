// 10. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

import scanf from 'scanf';

console.log('Informe o primeiro numero: ');
let num1 = scanf('%d');

console.log('Informe o segundo numero: ');
const num2 = scanf('%d');

const i: number = num1;

while (num1 < num2) {
    console.log(num1 + 1);

    num1++;
}