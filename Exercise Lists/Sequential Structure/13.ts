// 13.Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// a: Para homens: (72.7*h) - 58
// b: Para mulheres: (62.1*h) - 44.7

import scanf from 'scanf';

console.log('Informe sua altura e em seguida seu sexo, (M) para mulher e (H) para homem: ');
const height = scanf('%f');
const gender = scanf('%s');

let ideal: number = 0;

if (gender === 'H') {
    ideal = 72.7 * height - 58;
} else if (gender === 'M') {
    ideal = 62.1 * height - 44.7;
}

console.log(`Seu peso ideal é: ${ideal}`);