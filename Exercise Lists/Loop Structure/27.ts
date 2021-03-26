// 27. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.

import scanf from 'scanf';

console.log('Informe o numero de turmas: ');
const classes = scanf('%d');

let totalu = 0;

for (let i = 0; i < classes; i++) {
    console.log('Informe o numero de alunos desta turma: ');
    let students = scanf('%d');

    while (students > 40) {
        console.log('Numero de alunos excedente, informe novamente: ');
        students = scanf('%d');
    }

    totalu += students;
}

const average = totalu / classes;

console.log(`Média de alunos por turma: ${average}`);