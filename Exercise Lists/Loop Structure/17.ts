// 17. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5! = 5.4.3.2.1=120

import scanf from 'scanf';

console.log('Informe o numero: ');
let num = scanf('%d');

let factorial: number = num;

while (num > 1) {
    factorial = factorial * (num - 1);
    num--;
}

console.log(factorial);