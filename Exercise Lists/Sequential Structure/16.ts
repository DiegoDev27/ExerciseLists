// 16. Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

import scanf from 'scanf';

console.log('Informe a area em metros quadrado para ser pintada: ');
const area = scanf('%f');

const liters = area * 3;
const tin = 18;
const price = 80;

console.log(`Quantidade de latas necessarias para pintar a area: ${liters / tin}
        Preço total ${liters / tin * price} Reais`);