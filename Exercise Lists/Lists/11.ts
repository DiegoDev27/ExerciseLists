// 11. Altere o programa anterior, intercalando 3 vetores de 10 elementos cada.

import scanf from "scanf";

const vec1 = [];
const vec2 = [];
const vec3 = [];
const vec4 = [];
let num1 = 0;
let num2 = 0;
let num3 = 0;

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
    console.log('Digite os numeros do terceiro vetor: ');
    num3 = scanf('%d');
    vec3.push(num3);
}

for (let x = 0; x < 10; x++) {
    vec4.push(vec1[x], vec2[x], vec3[x]);
}

console.log(`Vetor 1: ${vec1}
Vetor 2: ${vec2}
Vetor 3: ${vec3}
Intercalando os 3 vetores: ${vec4}`);