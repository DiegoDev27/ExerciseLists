// 34. Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.

import scanf from 'scanf';

console.log('Informe o numero: ');
const num = scanf('%d');

let divisor = 0;

for (let i = 1; i <= num; i++) {

    if (num % i === 0) {
        divisor++;
    }
}

if (divisor === 2) {
    console.log(`${num} é um numero primo!`);
} else {
    console.log(`${num} não é um numero primo!`);
}