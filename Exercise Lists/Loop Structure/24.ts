// 24. Faça um programa que calcule o mostre a média aritmética de N notas.

import scanf from 'scanf';

console.log('Informe a quantidade de notas: ');
const amount = scanf('%d');

let scores = 0;
let total = 0;

for (let i = 1; i <= amount; i++) {
    console.log('Informe as notas: ');
    scores = scanf('%f');

    total += scores;
}

console.log(`Media aritmetica: ${total / amount}`);