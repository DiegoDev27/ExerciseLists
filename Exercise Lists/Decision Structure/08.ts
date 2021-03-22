// 8. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

import scanf from 'scanf';

console.log('Informe o primeiro preço do produto em reais: ');
const price1 = scanf('%f');

console.log('Informe o segundo preço do produto em reais: ');
const price2 = scanf('%f');

console.log('Informe o terceiro preço do produto em reais: ');
const price3 = scanf('%f');

if (price1 < price2 && price1 < price3) {
    console.log(`Produto mais em conta é de ${price1} Reais `);
} else if (price2 < price1 && price2 < price3) {
    console.log(`Produto mais em conta é de ${price2} Reais `);
} else if (price3 < price1 && price3 < price2) {
    console.log(`Produto mais em conta é de ${price3} Reais `);
}