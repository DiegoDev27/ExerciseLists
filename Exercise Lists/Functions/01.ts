// 1. Faça um programa para imprimir:

// 1
// 2   2
// 3   3   3
// .....
// n   n   n   n   n   n  ... n
// para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.

import scanf from "scanf";

let num: number = 0;

console.log('Informe o numero por favor: ');
num = scanf('%d');


printNesima(num);

function printNesima(value: number): void {
    for (let i = 1; i <= value; i++) {
        for (let j = 0; j < i; j++)
            console.log(i);
    }
}