// 38. Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
// Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do year anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.

import scanf from 'scanf';

let increase = 0.015;
let year = 1995;

console.log('Digite o valor inicial do salario do funcionário: ');
const initialSalary = scanf('%d');

let currentSalary = initialSalary;

while (year <= 2021) {
    increase += increase;
    currentSalary += currentSalary * increase;
    year++;
    console.log(increase);
    console.log(currentSalary);
}

console.log(`Salario atual do funcionario é: ${currentSalary}`);