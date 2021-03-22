// 22. Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

import scanf from 'scanf';

console.log('Informe o numero: ');
const num = scanf('%d');

if (num % 2 === 0) {
    console.log(`${num} é um numero par!`);
} else {
    console.log(`${num} é um numero impar!`);
}