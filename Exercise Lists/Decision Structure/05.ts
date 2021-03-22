// 5. Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

import scanf from 'scanf';

console.log('Informe a primeira nota: ');
const score1 = scanf('%f');

console.log('Informe a segunda nota: ');
const score2 = scanf('%f');

const average = (score1 + score2) / 2;

if (average >= 7 && average < 10) {
    console.log('Aprovado');
} else if (average < 7) {
    console.log('Reprovado');
} else if (average >= 10) {
    console.log('Aprovado com Distinção');
}