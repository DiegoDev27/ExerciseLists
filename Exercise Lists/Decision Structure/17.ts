// 17. Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

import scanf from 'scanf';

console.log('Informe o ano para saber se é bissexto ou não: ');
const year = scanf('%f');

if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        console.log(`${year} é um ano bissexto!`);
    }
} else {
    console.log(`${year} não é um ano bissexto!`);
}