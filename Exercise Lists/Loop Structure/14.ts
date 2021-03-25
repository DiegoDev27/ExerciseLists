// 14. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números odds e a quantidade de números evens.

import scanf from 'scanf';

let i: number = 0;
let odds: number = 0;
let evens: number = 0;

console.log('Informe 10 numeros: ');
for (i = 0; i < 10; i++) {
    const num = scanf('%d');

    if (num % 2 === 0) {
        odds++;
    } else if (num % 2 !== 0) {
        evens++;
    }
}

console.log(`Numeros pares ${odds}, Numeros impares ${evens}`);