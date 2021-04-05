// 16. Utilize uma lista para resolver o problema a seguir. Uma empresa paga seus vendedores com base em comissões. O vendedor recebe $200 por semana mais 9 por cento de suas vendas brutas daquela semana. Por exemplo, um vendedor que teve vendas brutas de $3000 em uma semana recebe $200 mais 9 por cento de $3000, ou seja, um total de $470. Escreva um programa (usando um array de contadores) que determine quantos vendedores receberam salários nos seguintes intervalos de valores:
// $200 - $299
// $300 - $399
// $400 - $499
// $500 - $599
// $600 - $699
// $700 - $799
// $800 - $899
// $900 - $999
// $1000 em diante
// Desafio: Crie ma fórmula para chegar na posição da lista a partir do salário, sem fazer vários ifs aninhados.

import scanf from "scanf";

const sellers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let grossValue = 0;
let salary = 0;

for (let i = 0; i < 10; i++) {

    console.log(`Informe o valor de vendas do vendedor ${i + 1} em reais: `);
    grossValue = scanf('%d');

    salary = grossValue * 0.09 + 200;

    let index = Math.floor(salary / 100) - 1;

    if (index > 9) {
        index = 9;
    } else if (index < 1) {
        index = 1;
    }

    sellers[index - 1] += 1;
    console.log(index);
}

console.log(sellers);

for (let j = 0; j < 9; j++) {
    console.log(`${j * 100 + 200} - ${(j + 1) * 100 + 199} = ${sellers[j]}`);
}