// 17. Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// // misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

import scanf from 'scanf';


console.log('Informe a area em metros quadrado para ser pintada: ');
const area = scanf('%f');

const liters = area * 6;
const tin = 18;
const gallon = 3.6;
const priceTin = 80;
const priceGallon = 25;


console.log(`A quantidade de tinta necessaria são de ${liters} Litros
                Se comprar apenas latas serão necessarios ${liters / tin} Latas e o preço será de ${priceTin * liters / tin} Reais
                Se comprar apenas galões serão necessarios ${liters / gallon} e o preço será de ${priceGallon * liters / gallon}`);