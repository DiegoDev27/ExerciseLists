// 1. Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

import scanf from "scanf";

const vec = [];
let num;

for (let i = 0; i < 5; i++) {
    console.log('Informe os numeros: ');
    num = scanf('%d');
    vec.push(num);
}

console.log(vec);