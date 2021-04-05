// 3. Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

import scanf from "scanf";

const vec = [];
let sum = 0;
let score = 0;
let i = 0;

for (i = 0; i < 4; i++) {
    console.log(`Informe a nota ${i + 1}: `);
    score = scanf('%f');

    sum += score;
    vec.push(score);
}

console.log(`Notas: ${vec}
Média: ${sum / i}`);