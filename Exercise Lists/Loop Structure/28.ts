// 28. Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.

import scanf from 'scanf';

console.log('Informe a quantidade de CDs: ');
const cds = scanf('%d');

let value = 0;
let totalvalue = 0;

for (let i = 0; i < cds; i++) {
    console.log('Informe o valor de cada um: ');
    value = scanf('%f');

    totalvalue += value;
}

const average: number = totalvalue / cds;

console.log(`Valor total investido na coleção: ${totalvalue} Reais,
Valor médio de cada CD: ${average} Reais.`);