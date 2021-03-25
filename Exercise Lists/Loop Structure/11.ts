// 11. Altere o programa anterior para mostrar no final a soma dos números.

import scanf from 'scanf';

console.log('Informe o primeiro numero: ');
let num1 = scanf('%d');

console.log('Informe o segundo numero: ');
const num2 = scanf('%d');

let sum: number = 0;

while (num1 < num2 - 1) {
    console.log(num1 + 1);

    num1++;
    sum += num1;
}

console.log(sum);