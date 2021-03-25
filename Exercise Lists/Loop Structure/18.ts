// 18. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

import scanf from 'scanf';

let i: number = 0;
let nBigger;
let sum: number = 0;
let nums: number = 0;
let nLess;


console.log('Informe os numeros');
while (i < 9) {
    nums = scanf('%f');

    if (nLess == null || nBigger == null) {
        nLess = nums;
        nBigger = nums;
    }

    if (nums > nBigger) {
        nBigger = nums;
    }

    if (nLess > nums) {
        nLess = nums;
    }

    sum += nums;
    i++;
}

console.log(`Maior numero: ${nBigger}, Menor numero: ${nLess}, Soma: ${sum}`);