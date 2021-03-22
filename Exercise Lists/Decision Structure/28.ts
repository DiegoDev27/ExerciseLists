// 28. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
// Até 5 Kg           Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

import scanf from 'scanf';

console.log('Informe a quantidade de carne em KG: ');
const amountBeef = scanf('%f');

console.log('Informe o tipo da carne: ');
const typeBeef = scanf('%s');

console.log('Informe a forma de pagamento: ');
const payment = scanf('%s');

let price: number = 0;
let finalPrice: number = 0;

if (typeBeef === 'File-Duplo') {
    if (amountBeef >= 5) {
        price = 4.90;
    } else if (amountBeef < 5) {
        price = 5.80;
    }
} else if (typeBeef === 'Alcatra') {
    if (amountBeef >= 5) {
        price = 5.90;
    } else if (amountBeef < 5) {
        price = 6.80;
    }
} else if (typeBeef === 'Picanha') {
    if (amountBeef >= 5) {
        price = 6.90;
    } else if (amountBeef < 5) {
        price = 7.80;
    }
}

finalPrice = price * amountBeef;

if (payment === 'Cartao') {
    const discount: number = finalPrice * 0.05;
    finalPrice = finalPrice - discount;
    console.log(`CUPOM FISCAL:
TIPO: ${typeBeef},
QUANTIDADE: ${amountBeef} KG's,
PREÇO TOTAL: R$${finalPrice + discount},
FORMA DE PAGAMENTO: ${payment},
VALOR DO DESCONTO: R$${discount},
VALOR A PAGAR: R$${finalPrice}.`);
} else if (payment === 'Dinheiro') {
    console.log(`CUPOM FISCAL:
TIPO: ${typeBeef},
QUANTIDADE: ${amountBeef} KG's,
PREÇO TOTAL: R$${finalPrice},
FORMA DE PAGAMENTO: ${payment},
VALOR DO DESCONTO: R$0,
VALOR A PAGAR: R$${finalPrice}.`);
}