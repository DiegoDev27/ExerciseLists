// 2. Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

import scanf from "scanf";

const vec = [];
let num = 0;
const result = [];

for (let i = 0; i < 10; i++) {
    console.log("Informe os numeros: ");
    num = scanf("%f");
    vec.push(num);
}

for (let i = vec.length - 1; i >= 0; i--) {
    result.push(vec[i]);
}

console.log(result);