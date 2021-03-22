// 11. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

import scanf from 'scanf';

console.log('Insira seu salario em reais para calcular o reajuste: ');
let salary = scanf('%f');

if (salary <= 280) {
    console.log(`Salario antes do reajuste: ${salary} Reais
                Percentual de aumento aplicado: 20%
                Valor do aumento: ${salary * 0.20} Reais
                Novo salary: ${salary += (salary * 0.20)}`);
} else if (salary > 280 && salary <= 700) {
    console.log(`Salario antes do reajuste: ${salary} Reais
                Percentual de aumento aplicado: 15%
                Valor do aumento: ${salary * 0.15} Reais
                Novo salary: ${salary += (salary * 0.15)}`);
} else if (salary > 700 && salary <= 1500) {
    console.log(`Salario antes do reajuste: ${salary} Reais
                Percentual de aumento aplicado: 10%
                Valor do aumento: ${salary * 0.10} Reais
                Novo salary: ${salary += (salary * 0.10)}`);
} else if (salary > 1500) {
    console.log(`Salario antes do reajuste: ${salary} Reais
                Percentual de aumento aplicado: 5%
                Valor do aumento: ${salary * 0.05} Reais
                Novo salary: ${salary += (salary * 0.05)}`);
}