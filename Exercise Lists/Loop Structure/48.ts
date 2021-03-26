// 48. Faça um programa que peça um numero inteiro positivo e em seguida mostre este numero invertido.
// Exemplo:
// 12376489
// => 98467321

import scanf from 'scanf';

let num = 0;
let result = '';
let converted = null;

console.log('por favor informe o numero: ');
num = scanf('%d');

converted = num.toString();

for (let i = converted.length; i > 0; i--) {

    result += converted[i - 1];

}

console.log(result);