// 8. Faça um programa que leia 5 números e informe a soma e a média dos números.

import scanf from 'scanf';

let i: number = 0;
let sum: number = 0;

while (i <= 4) {
    console.log('Insira 5 numeros: ');
    const num = scanf('%f');

    sum += num;
    i++;
}

console.log(`Soma: ${sum}, Média: ${sum / 5}`);