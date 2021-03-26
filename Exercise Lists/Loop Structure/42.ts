// 42. Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deverá terminar quando for lido um número negativo.

import scanf from 'scanf';

let num = 0;
let firstCount = 0;
let secondCount = 0;
let thirdCounter = 0;
let fourthCounter = 0;

while (num >= 0) {
    console.log('Informe o numero: ');
    num = scanf('%d');

    if (num < 0) {
        break;
    }

    if (num >= 0 && num <= 25) {
        firstCount++;
    }

    if (num >= 26 && num <= 50) {
        secondCount++;
    }

    if (num >= 51 && num <= 75) {
        thirdCounter++;
    }

    if (num >= 76 && num <= 100) {
        fourthCounter++;
    }
}

console.log(`Numeros contidos no intervalo de 0 a 25: ${firstCount},
Numeros contidos no intervalo de 26 a 50: ${secondCount},
Numeros contidos no intervalo de 51 a 75: ${thirdCounter},
Numeros contidos no intervalo de 76 a 100: ${fourthCounter}.`);