// 6. Faça um Programa que leia três números e mostre o maior deles.

import scanf from 'scanf';

console.log('Informe o primeiro numero: ');
const num1 = scanf('%f');

console.log('Informe o segundo numero: ');
const num2 = scanf('%f');

console.log('Informe o terceiro numero: ');
const num3 = scanf('%f');

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else if (num3 > num1 && num3 > num2) {
    console.log(num3);
}