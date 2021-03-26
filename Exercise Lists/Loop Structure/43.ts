// 43. O cardápio de uma lanchonete é o seguinte:
// Especificação   Código  Preço
// Cachorro Quente 100     R$ 1,20
// Bauru Simples   101     R$ 1,30
// Bauru com ovo   102     R$ 1,50
// Hambúrguer      103     R$ 1,20
// Cheeseburguer   104     R$ 1,30
// Refrigerante    105     R$ 1,00
// Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.

import scanf from 'scanf';

let code = null;
let amount = 0;
let price = 0;
let total = 0;
const cachorroquente = 1.2;
const baurusimples = 1.3;
const baurucomovo = 1.5;
const hamburguer = 1.2;
const cheeseburguer = 1.3;
const refrigerante = 1.0;

while (code !== 0) {

    console.log(`Informe o codigo dos itens que deseja, e digite 0 para concluir o pedido:
Especificacao       Codigo      Preco
Cachorro Quente     100         R$1,20
Bauru Simples       101         R$1,30
Bauru com Ovo       102         R$1,50
Hamburguer          103         R$1,20
CheeseBurguer       104         R$1,30
Refrigerante        105         R$1,00
`);
    code = scanf('%d');

    if (code === 0) {
        break;
    }

    console.log('Agora digite a quantidade deste item: ');
    amount = scanf('%d');

    if (code === 100) {
        price = cachorroquente * amount;
        console.log(`Valor de ${amount} Cachorro Quente: R$${price}0`);
        total += price;
    }

    if (code === 101) {
        price = baurusimples * amount;
        console.log(`Valor de ${amount} Bauru Simples: R$${price}`);
        total += price;
    }

    if (code === 102) {
        price = baurucomovo * amount;
        console.log(`Valor de ${amount} Bauru com Ovo: R$${price}`);
        total += price;
    }

    if (code === 103) {
        price = hamburguer * amount;
        console.log(`Valor de ${amount} Hamburguer: R$${price}`);
        total += price;
    }

    if (code === 104) {
        price = cheeseburguer * amount;
        console.log(`Valor de ${amount} CheeseBurguer: R$${price}`);
        total += price;
    }

    if (code === 105) {
        price = refrigerante * amount;
        console.log(`Valor de ${amount} Refrigerante: R$${price}`);
        total += price;
    }

}

console.log(`Total do pedido: R$${total}0`);