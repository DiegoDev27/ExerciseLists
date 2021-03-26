// 19. Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.

import scanf from 'scanf';

let i: number = 0;
let nBigger;
let sum: number = 0;
let nums: number = 0;
let nLess;


console.log('Informe os numeros de 1 a 1000: ');
while (i < 9) {
    nums = scanf('%f');

    while (nums < 0 || nums > 1000) {
        console.log('Valor invalido, Insira novamente: ');
        nums = scanf('%f');
    }

    if (!nLess || !nBigger) {
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