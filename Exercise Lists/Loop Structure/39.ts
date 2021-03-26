// 39. Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em centímetros. Encontre o aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.

import scanf from 'scanf';

let higher = 0;
let lower = null;
let higherNum = null;
let lowerNum = null;

for (let i = 0; i <= 10; i++) {
    console.log('Informe o Numero do aluno: ');
    const num = scanf('%d');

    console.log('Informe a Altura do aluno em cm: ');
    const height = scanf('%d');

    if (height > higher) {
        higherNum = num;
        higher = height;
    }

    if (!lower) {
        lower = height;
    }

    if (lower > height) {
        lowerNum = num;
        lower = height;
    }
}

console.log(`Aluno mais alto Código: ${higherNum}, Altura: ${higher}
Aluno mais baixo Código: ${lowerNum}, Altura: ${lower}`);