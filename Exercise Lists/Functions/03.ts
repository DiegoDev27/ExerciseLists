// 3. Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.

import scanf from "scanf";

let n1: number = 0;
let n2: number = 0;
let n3: number = 0;

console.log('Informe o primeiro numero: ');
n1 = scanf('%d');

console.log('Informe o segundo numero: ');
n2 = scanf('%d');

console.log('Informe o terceiro numero: ');
n3 = scanf('%d');

console.log('Soma dos 3 numeros: ', numbersSum(n1, n2, n3));


function numbersSum(num1: number, num2: number, num3: number): number {
    return num1 + num2 + num3;
}