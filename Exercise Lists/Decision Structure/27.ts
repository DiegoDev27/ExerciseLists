// 27. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
// Até 5 Kg           Acima de 5 Kg
// Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
// Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

import scanf from 'scanf';

console.log('Informe a quantidade de KG de morangos: ');
const amountStrawberry = scanf('%f');

console.log('Informe a quantidade de KG de maçãs: ');
const amountApple = scanf('%f');

let priceStrawberry: number = 0;
let priceApple: number = 0;
let finalPriceStrawberry: number = 0;
let finalPriceApple: number = 0;
let finalPrice: number = 0;


if (amountStrawberry >= 5) {
    priceStrawberry = 2.20;
} else if (amountStrawberry < 5) {
    priceStrawberry = 2.50;
}

finalPriceStrawberry = priceStrawberry * amountStrawberry;

if (amountApple >= 5) {
    priceApple = 1.50;
} else if (amountApple < 5) {
    priceApple = 1.80;
}

finalPriceApple = priceApple * amountApple;

finalPrice = finalPriceApple + finalPriceStrawberry;

if (amountStrawberry + amountApple > 8 || finalPrice > 25) {
    finalPrice = finalPrice - (finalPrice * 0.10);
}

console.log(`Valor a ser pago R$${finalPrice}`);