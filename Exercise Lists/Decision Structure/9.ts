// 9. Faça um Programa que leia três números e mostre-os em ordem decrescente.

import scanf from 'scanf';

console.log('Insira o primeiro numero: ');
const num1 = scanf('%f');

console.log('Insira o segundo numero: ');
const num2 = scanf('%f');

console.log('Insira o terceiro numero: ');
const num3 = scanf('%f');


if (num1 > num2 && num1 > num3 && num2 > num3) {
    console.log(num1, num2, num3);
} else if (num2 > num1 && num2 > num3 && num3 > num1) {
    console.log(num2, num3, num1);
} else if (num3 > num2 && num3 > num1 && num2 > num1) {
    console.log(num3, num2, num1);
} else if (num3 > num1 && num3 > num2 && num1 > num2) {
    console.log(num3, num1, num2);
} else if (num2 > num1 && num2 > num3 && num1 > num3) {
    console.log(num2, num1, num3);
} else if (num1 > num2 && num1 > num3 && num3 > num2) {
    console.log(num1, num3, num2);
}