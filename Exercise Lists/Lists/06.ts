// 6. Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

import scanf from "scanf";

const avgStudents = [];
let scores = 0;
let students = 0;

for (let i = 0; i < 5; i++) {

    let average = 0;
    let scoreSum = 0;

    for (let j = 0; j < 4; j++) {

        console.log(`Informe a nota ${j + 1}: `);
        scores = scanf('%f');

        scoreSum += scores;
    }

    average = scoreSum / 4;

    if (average >= 7) {
        students++;
        avgStudents.push(average);
    }

}

console.log(`Quantidade de alunos com media maior ou igual a 7: ${students}
Médias: ${avgStudents}`);