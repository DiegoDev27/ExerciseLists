// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).

import scanf from 'scanf';

console.log('informe a temperatura em fareheint:');
const temperature = scanf('%f');

const resultCelsius = 5 * ((temperature - 32) / 9);

console.log(`A temperatura em Celsius é: ${resultCelsius}`);