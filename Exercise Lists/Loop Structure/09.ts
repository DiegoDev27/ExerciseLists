// 9. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

import scanf from 'scanf';

let i: number = 0;

while (i <= 50) {
    i++;

    if (i % 2 === 0) {
        console.log(i);
    }
}