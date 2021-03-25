// 13. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.

import scanf from 'scanf';

console.log('Informe a base: ');
const base = scanf('%d');

console.log('Informe o expoente: ');
let expo = scanf('%d');

let potency: number = base;

while (expo > 1) {
    potency = potency * base;
    expo--;
}

console.log(`A potencia é ${potency}`);