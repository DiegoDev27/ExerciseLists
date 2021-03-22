// 23. Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.

import scanf from 'scanf';

console.log('Informe o numero: ');
const num = scanf('%f');

if (num === Math.round(num)) {
    console.log(`${num} é um numero inteiro`);
} else {
    console.log(`${num} é um numero decimal`);
}