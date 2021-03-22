// 2. Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

import scanf from 'scanf';

console.log('Informe um numero: ');
const num = scanf('%f');

if (num < 0) {
    console.log(`${num} é um numero negativo`);
} else {
    console.log(`${num} é um numero positivo`);
}