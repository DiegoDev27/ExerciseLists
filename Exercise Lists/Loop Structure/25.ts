// 25. Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

import scanf from 'scanf';

console.log('Informe o numero de pessoas: ');
const amount = scanf('%d');

let total = 0;

for (let i = 1; i <= amount; i++) {
    console.log('Informe a idade: ');
    const age = scanf('%d');

    total += age;
}

const average = total / amount;

if (average <= 25) {
    console.log('Essa turma é jovem!');
} else if (average > 25 && average <= 60) {
    console.log('Essa turma é adulta!');
} else if (average > 60) {
    console.log('Essa turma é idosa!');
}