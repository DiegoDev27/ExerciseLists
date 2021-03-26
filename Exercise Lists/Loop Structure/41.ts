// 41 Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
// Os juros e a quantidade de parcelas seguem a tabela abaixo:
// Quantidade de Parcelas  % de Juros sobre o valor inicial da dívida
// 1       0
// 3       10
// 6       15
// 9       20
// 12      25
// Exemplo de saída do programa:
// Valor da Dívida Valor dos Juros Quantidade de Parcelas  Valor da Parcela
// R$ 1.000,00     0               1                       R$  1.000,00
// R$ 1.100,00     100             3                       R$    366,00
// R$ 1.150,00     150             6                       R$    191,67

import scanf from 'scanf';

console.log('Informe a divida: ');
const debt = scanf('%d');

console.log('Valor da divida -- Valor dos Juros -- Quantidade de Parcelas -- Valor da Parcela');

const installments = [
    {
        parcel: 1,
        fees: 0
    },
    {
        parcel: 3,
        fees: 0.10
    },
    {
        parcel: 6,
        fees: 0.15
    },
    {
        parcel: 9,
        fees: 0.20
    },
    {
        parcel: 12,
        fees: 0.25
    }
];

for (let i = 0; i <= 4; i++) {
    const fees = debt * installments[i].fees;
    const parcels = installments[i].parcel;
    console.log(`${debt + fees}                      ${debt * fees}                       ${parcels}                 R$${(debt + fees) / parcels}`);
}