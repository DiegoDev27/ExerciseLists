// 50. Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, Faça um programa que calcule o valor de H com N termos.

import scanf from 'scanf';

const h = 1;
let n = 2;
let n1result = 0;
let n2result = 0;

while (n <= 10 - 1) {
    console.log(`${h}/${n} + `);

    n1result += h;
    n2result += n;

    n += 1;
}

console.log(`Calculo de H com N: ${n1result}/${n2result} = ${n1result / n2result}`);