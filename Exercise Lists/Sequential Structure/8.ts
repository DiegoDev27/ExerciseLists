// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

import scanf from 'scanf';


console.log('Informe quanto ganha por hora: ');
const income = scanf('%f');

console.log('Informe quantas horas trabalhou este mês: ');
const hours = scanf('%f');

console.log(`total do seu salário neste mes: ${income * hours}`);