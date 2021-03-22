// 14. Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
//   Média de Aproveitamento  Conceito
//   Entre 9.0 e 10.0        A
//   Entre 7.5 e 9.0         B
//   Entre 6.0 e 7.5         C
//   Entre 4.0 e 6.0         D
//   Entre 4.0 e zero        E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

import scanf from 'scanf';

console.log('Informe a primeira nota do aluno: ');
const score1 = scanf('%f');

console.log('Informe a segunda nota do aluno: ');
const score2 = scanf('%f');

const average = (score1 + score2) / 2;

if (average >= 9 && average <= 10) {
    console.log(`Primeira nota: ${score1}
                     Segunda nota:  ${score2}
                     Media:         ${average}
                     Conceito:      A - Aprovado`);
} else if (average >= 7.5 && average < 9) {
    console.log(`Primeira nota: ${score1}
                     Segunda nota:  ${score2}
                     Media:         ${average}
                     Conceito:      B - Aprovado`);
} else if (average >= 6 && average < 7.5) {
    console.log(`Primeira nota: ${score1}
                     Segunda nota:  ${score2}
                     Media:         ${average}
                     Conceito:      C - Aprovado`);
} else if (average >= 4 && average < 6) {
    console.log(`Primeira nota: ${score1}
                     Segunda nota:  ${score2}
                     Media:         ${average}
                     Conceito:      D - Reprovado`);
} else if (average >= 0 && average < 4) {
    console.log(`Primeira nota: ${score1}
                     Segunda nota:  ${score2}
                     Media:         ${average}
                     Conceito:      E - Reprovado`);
}