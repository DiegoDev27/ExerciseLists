// 21. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

import scanf from 'scanf';

console.log('Insira o numero: ');
const num = scanf('%f');

let divisor = 0;
let i = 0;

while (i <= num) {
    if (num % i === 0) {
        divisor++;
    }
    i++;
}

if (divisor <= 2) {

    console.log(`${num} é um numero primo!`);

} else if (divisor > 2) {

    console.log(`${num} não é um numero primo!`);
}