// 7. Faça um programa que leia 5 números e informe o maior número.

import scanf from 'scanf';

let i: number = 0;
let bigger: number = 0;

while (i <= 4) {
    console.log('Insira 5 numeros: ');
    const num = scanf('%f');

    if (num > bigger) {
        bigger = num;
    }
    i++;
}

console.log(bigger);