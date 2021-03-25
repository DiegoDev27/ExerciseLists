// 15. A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

import scanf from 'scanf';

console.log('Informe o n-ésimo termo: ');
const n = scanf('%d');

let last: number = 1;
let penult: number = 0;
let count: number = 3;
let term: number = 0;

if (n === 1 || n === 2) {
    console.log('1');
} else {
    count = 3;
}

while (count <= n) {
    term = last + penult;
    penult = last;
    last = term;
    count++;
    console.log(term);
}
