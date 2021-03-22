// 21. Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// a: Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// b: Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

import scanf from 'scanf';

console.log('Informe o valor para saque: ');
let value = scanf('%f');

if (value >= 10 && value <= 600) {
    const ahundred: number = Math.trunc(value / 100);
    value = value % 100;

    const fifty: number = Math.trunc(value / 50);
    value = value % 50;

    const ten: number = Math.trunc(value / 10);
    value = value % 10;

    const five: number = Math.trunc(value / 5);
    value = value % 5;

    const one = value;

    console.log(`${ahundred} notas de cem, ${fifty} notas de cinquenta, ${ten} notas de 10, ${five} notas de cinco e ${one} notas de um.`);
} else {
    console.log('Valor informado não suportado.');
}