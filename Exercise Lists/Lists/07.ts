// 7. Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

import scanf from "scanf";

const int = [];
let mult = 1;
let sum = 0;
let num = 0;

for (let i = 0; i < 5; i++) {
    console.log(`Informe o numero ${i + 1}: `);
    num = scanf('%d');

    int.push(num);

    mult = mult * num;
    sum += num;
}

console.log(`Soma: ${sum}
Multiplicação: ${mult}
Numeros: ${int}`);
