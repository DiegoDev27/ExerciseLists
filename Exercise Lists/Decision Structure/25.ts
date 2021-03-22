// 25. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

import scanf from 'scanf';

let count = 0;

console.log('Telefonou para a vitima? ');
const first = scanf('%s');
console.log('Esteve no local do crime? ');
const second = scanf('%s');
console.log('Mora perto da vitima? ');
const third = scanf('%s');
console.log('Devia para a vitima? ');
const fourth = scanf('%s');
console.log('Ja trabalhou com a vitima?');
const fifth = scanf('%s');

if (first === 'sim') {
    count++;
}
if (second === 'sim') {
    count++;
}
if (third === 'sim') {
    count++;
}
if (fourth === 'sim') {
    count++;
}
if (fifth === 'sim') {
    count++;
}

if (count === 2) {
    console.log('Você é suspeito!');
} else if (count === 3 || count === 4) {
    console.log('Você é cumplice!');
} else if (count === 5) {
    console.log('Você é assassino!');
} else {
    console.log('Você é inocente!');
}