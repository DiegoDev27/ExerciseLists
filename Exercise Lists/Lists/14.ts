// 15. Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

import scanf from "scanf";

const vec = [];
let answer = '';
let count = 0;

console.log('Telefonou para a vitima ? ');
answer = scanf('%s');
vec.push(answer);

console.log('Esteve no local do crime ? ');
answer = scanf('%s');
vec.push(answer);

console.log('Mora perto da vitima ? ');
answer = scanf('%s');
vec.push(answer);

console.log('Devia para a vitima ? ');
answer = scanf('%s');
vec.push(answer);

console.log('Ja trabalhou com a vitima ? ');
answer = scanf('%s');
vec.push(answer);

console.log(vec);

for (let i = vec.length - 1; i >= 0; i--) {
    if (vec[i] === 'sim') {
        count++;
    }
}

if (count === 2) {
    console.log('Você é suspeito!');
} else if (count >= 3 && count <= 4) {
    console.log('Você é cumplice!');
} else if (count === 5) {
    console.log('Você é assassino!');
} else {
    console.log('Você é inocente!');
}