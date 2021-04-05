// 10. Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.

import scanf from "scanf";

const vec1 = [];
const vec2 = [];
const vec3 = [];
let num1 = 0;
let num2 = 0;

for (let i = 0; i < 10; i++) {
    console.log('Digite os numeros do primeiro vetor: ');
    num1 = scanf('%d');
    vec1.push(num1);
}

for (let j = 0; j < 10; j++) {
    console.log('Digite os numeros do segundo vetor: ');
    num2 = scanf('%d');
    vec2.push(num2);
}

for (let x = 0; x < 10; x++) {
    vec3.push(vec1[x], vec2[x]);
}

console.log(`Vetor 1: ${vec1}
Vetor 2: ${vec2}
Vetor 3: ${vec3}`);