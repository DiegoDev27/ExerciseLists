// 4. Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

import scanf from "scanf";

const vec = [];
let count = 0;
const consonants = [];
let letters = '';

for (let i = 0; i < 10; i++) {
    console.log('Informe as letras: ');
    letters = scanf('%S');

    vec.push(letters);

    if (letters !== 'A' && letters !== 'E' && letters !== 'I' && letters !== 'O' && letters !== 'U') {
        consonants.push(letters);
        count++;
    }
}

console.log(`Quantidade de consoantes ${count}
Consoantes: ${consonants}`);
