// 49. Faça um programa que mostre os n termos da Série a seguir:
// S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m.
// Imprima no final a soma da série.

import scanf from 'scanf';

let n2 = 1;
let n1result = 0;
let n2result = 0;

for (let n1 = 1; n1 <= 10 - 1; n1++) {
    console.log(`${n1}/${n2} +`);

    n1result += n1;
    n2result += n2;

    n2 += 2;
}

console.log(`Soma dos termos ${n1result}/${n2result}`);