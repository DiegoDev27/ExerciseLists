// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.

import scanf from 'scanf';

console.log(`Informe a quantidade de notas :`);
const limit = scanf('%f');

let total = 0;
for (let i = 0; i < limit; i++) {
    console.log(`Informe a nota ${i + 1} :`);
    total += scanf('%f');
}

console.log(`media: ${total / (limit)}`);