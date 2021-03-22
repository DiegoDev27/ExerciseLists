// 1. Faça um Programa que peça dois números e imprima o maior deles.

import scanf from 'scanf';

console.log('Informe o primeiro numero: ');
const num1 = scanf('%f');

console.log('Informe o segundo numero: ');
const num2 = scanf('%f');

if (num1 > num2) {
    console.log(`O maior numero é: ${num1}`);
} else {
    console.log(`O maior numero é: ${num2}`);
}