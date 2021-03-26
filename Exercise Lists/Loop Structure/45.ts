// 45. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido informar:
// Maior e Menor Acerto;
// Total de Alunos que utilizaram o sistema;
// A Média das Notas da Turma.
// Gabarito da Prova:
// 01 - A
// 02 - B
// 03 - C
// 04 - D
// 05 - E
// 06 - E
// 07 - D
// 08 - C
// 09 - B
// 10 - A
// // Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos usarem o programa.

import scanf from 'scanf';

const template = [];
const answers = [];
let answerTeacher;
let score = 0;
let biggestScore = 0;
let leastScore = -1;
let totalStudents = 0;
let avgClass = 0;
let students;
let totalScoreSum = 0;

for (let j = 0; j < 10; j++) {
    console.log(`Professor, digite a resposta da ${j + 1}`);
    answerTeacher = scanf('%S');

    template.push(answerTeacher);
}

while (students !== 'nao' && students !== '' && students !== ' ') {

    console.log('Outro aluno ira utilizar o sistema?');
    students = scanf('%S');

    if (students === 'nao' || students === '' || students === ' ') {
        break;
    }

    score = 0;

    for (let i = 0; i < 10; i++) {

        console.log(`Questao ${i + 1}: `);
        answers[i] = scanf('%S');

        if (answers[i] === template[i]) {
            score++;
        }
    }

    if (leastScore === -1) {
        leastScore = score;
    }

    if (leastScore > score) {
        leastScore = score;
    }

    if (biggestScore < score) {
        biggestScore = score;
    }

    totalScoreSum += score;

    totalStudents++;
}

avgClass = totalScoreSum / totalStudents;

console.log(`Maior Acerto: ${biggestScore}
Menor Acerto: ${leastScore}
Total de Alunos que utilizaram o sistema: ${totalStudents}
Media das notas da turma: ${avgClass}`);