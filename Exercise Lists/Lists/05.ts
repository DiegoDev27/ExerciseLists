// 5. Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

import scanf from "scanf";

const num = [];
const pairs = [];
const odd = [];
let nums = 0;

for (let i = 0; i < 20; i++) {
    console.log(`Informe o numero ${i + 1}: `);
    nums = scanf('%d');

    num.push(nums);

    if (nums % 2 === 0) {
        pairs.push(nums);
    } else {
        odd.push(nums);
    }
}

console.log(`Numeros: ${num}
Pares: ${pairs}
Impares: ${odd}`);