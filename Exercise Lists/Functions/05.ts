// 5. Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.

import scanf from "scanf";

const tax: number = 0.07;
let price: number = 0;

console.log('Informe o preço do produto vendido: ');
price = scanf('%d');

const finalPrice = productTax(tax, price);

console.log('Preço final: ' + finalPrice);


function productTax(theft: number, cost: number): number {
    cost += (theft * cost);

    return cost;
}