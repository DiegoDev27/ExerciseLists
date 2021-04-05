// 12. Foram anotadas as idades e alturas de 30 alunos. Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.

import scanf from "scanf";

const vecHeight = [];
const vecAge = [];
let height = 0;
let age = 0;
let totalHeight = 0;
let average = 0;
let student = 0;

for (let i = 0; i < 30; i++) {
    console.log(`Informe a idade do aluno ${i + 1}: `);
    age = scanf('%d');
    vecAge.push(age);

    console.log(`Informe a altura do aluno em cm: ${i + 1}: `);
    height = scanf('%d');
    vecHeight.push(height);

    totalHeight += height;
}

average = totalHeight / 30;

for (let j = vecAge.length - 1; j >= 0; j--) {
    if (vecAge[j] > 13 && vecHeight[j] < average) {
        student++;
    }
}

console.log(`Quantidade de alunos com mais de 13 anos e altura inferior a média: ${student} `);