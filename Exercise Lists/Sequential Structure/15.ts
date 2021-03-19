// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quanto pagou ao sindicato.
// o salário líquido.
// calcule os descontos e o salário líquido, conforme a tabela abaixo:
// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$
// Obs.: Salário Bruto - Descontos = Salário Líquido.

import scanf from 'scanf';

console.log('Quanto você ganha por hora em reais?');
const income = scanf('%f');

console.log('Trabalhou quantas horas esse mês?');
const hours = scanf('%f');

const grossSalary = income * hours;
const tax = grossSalary * 0.11;
const inss = grossSalary * 0.08;
const syndicate = grossSalary * 0.05;
const netSalary = grossSalary - (tax + inss + syndicate);

console.log(`Seu salario bruto é: ${grossSalary} Reais
        Você pagou ${grossSalary * 0.08} Reais ao INSS
        Você pagou ${grossSalary * 0.05} Reais ao sindicato
        Seu salario liquido é de ${grossSalary - ((grossSalary * 0.08) + (grossSalary * 0.05) + (grossSalary * 0.11))} Reais`);