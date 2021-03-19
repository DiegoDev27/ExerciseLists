// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

import scanf from 'scanf';

console.log('Informe a temperatura em celsius:');
const temperature = scanf('%f');

const resultFahrenheit = (temperature / 5 * 9) + 32;

console.log(`A temperatura em fareheint é: ${resultFahrenheit}`);