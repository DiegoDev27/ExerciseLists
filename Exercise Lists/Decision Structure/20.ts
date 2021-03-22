// 20. Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
// a: A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
// b: A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
// c: A mensagem "Aprovado com Distinção", se a média for igual a 10.

import scanf from 'scanf';

console.log('Insira a primeira nota do aluno: ');
const score1 = scanf('%f');

console.log('Insira a segunda nota do aluno: ');
const score2 = scanf('%f');

console.log('Insira a terceira nota do aluno: ');
const score3 = scanf('%f');

const average: number = (score1 + score2 + score3) / 3;

if (average >= 7 && average < 10) {
    console.log(`Média: ${average} Aprovado!`);
} else if (average < 7) {
    console.log(`Média: ${average} Reprovado!`);
} else if (average === 10) {
    console.log(`Média: ${average} Aprovado com Distinção!`);
}