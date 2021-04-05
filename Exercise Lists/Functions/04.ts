// 4. Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.

import scanf from "scanf";

let num: number = 0;
let result: string;

console.log('Informe o numero: ');
num = scanf('%d');

result = numberSign(num);

console.log(result);

function numberSign(value: number): string {
    if (value > 0) {
        return 'P';
    } else {
        return 'N';
    }
}