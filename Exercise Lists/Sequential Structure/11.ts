// 11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// a: o produto do dobro do primeiro com metade do segundo .
// b: a soma do triplo do primeiro com o terceiro.
// c: o terceiro elevado ao cubo.

import scanf from 'scanf';

console.log('Insira o primeiro numero inteiro:');
const num1 = scanf('%d');

console.log('Insira o segundo numero inteiro:');
const num2 = scanf('%d');

console.log('Insira o numero real:');
const num3 = scanf('%f');

const resultA = (num1 * 2) * (num2 / 2);
const resultB = (num1 * 3) + num3;
const resultC = num3 * num3 * num3;

console.log(`O primeiro resultado é: ${resultA}; O segundo resultado é:
${resultB}; O Terceiro resultado é: ${resultC}.`);