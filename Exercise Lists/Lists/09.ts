// 9. Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.

import scanf from "scanf";

const vec = [];
let num = 0;
let sum = 0;

for (let i = 0; i < 10; i++) {
    console.log('Digite um numero: ');
    num = scanf('%d');
    vec.push(num);
}

for (let j = vec.length - 1; j >= 0; j--) {
    sum += vec[j] ** 2;
}

console.log(`Soma dos quadrados dos elementos: ${sum}`);