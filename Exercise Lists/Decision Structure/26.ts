// 26. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Álcool:
// até 20 litros, desconto de 3% por litro
// acima de 20 litros, desconto de 5% por litro
// Gasolina:
// até 20 litros, desconto de 4% por litro
// acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

import scanf from 'scanf';

console.log('Informe o numero de litros vendidos: ');
const liters = scanf('%f');

console.log('Informe o tipo de combustivel vendido , (A) para alcool ou (G): ');
const type = scanf('%s');

const Aprice: number = 1.90;
const Gprice: number = 2.50;
let finalPrice: number = 0;

if (type === 'A') {
    if (liters >= 20) {
        console.log(`O preço a ser pago é de R$${finalPrice = Aprice * liters - (liters * 0.05)}`);
    } else if (liters < 20) {
        console.log(`O preço a ser pago é de R$${finalPrice = Aprice * liters - (liters * 0.03)}`);
    }
} else if (type === 'G') {
    if (liters >= 20) {
        console.log(`O preço a ser pago é de R$${finalPrice = Gprice * liters - (liters * 0.06)}`);
    } else if (liters < 20) {
        console.log(`O preço a ser pago é de R$${finalPrice = Gprice * liters - (liters * 0.04)}`);
    }
}