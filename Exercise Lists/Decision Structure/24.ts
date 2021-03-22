// 24. Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// a: par ou ímpar;
// b: positivo ou negativo;
// c: inteiro ou decimal.

import scanf from 'scanf';

console.log('Informe o primeiro numero: ');
const num1 = scanf('%f');

console.log('Informe o segundo numero: ');
const num2 = scanf('%f');

console.log('Informe a operação que deseja realizar, 1 - Soma, 2 - Substração, 3 - Multiplicação, 4 - Divisão: ');
const operator = scanf('%f');

let result: number = 0;

if (operator === 1) {
    result = num1 + num2;
} else if (operator === 2) {
    result = num1 - num2;
} else if (operator === 3) {
    result = num1 * num2;
} else if (operator === 4) {
    result = num1 / num2;
}

console.log(`Resultado: ${result}`);

if (result % 2 === 0) {
    console.log('É um número par!');
} else {
    console.log('É um numero impar!');
}

if (result > 0) {
    console.log('É um numero positivo!');
} else {
    console.log('É um numero negativo!');
}

if (result === Math.round(result)) {
    console.log('É um numero inteiro!');
} else {
    console.log('É um numero decimal!');
}