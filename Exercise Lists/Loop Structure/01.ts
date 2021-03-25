// 1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

import scanf from 'scanf';

console.log('Informe uma nota entre 0 e 10: ');
let score = scanf('%f');

while (score < 0 || score > 10) {
    console.log('Nova Invalida! Digite novamente: ');
    score = scanf('%f');
}