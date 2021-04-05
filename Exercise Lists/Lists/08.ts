// 8. Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

import scanf from "scanf";

const speed = [];
const vecHeight = [];
let age = 0;
let height = 0;

for (let i = 0; i < 5; i++) {
    console.log('Informe a idade: ');
    age = scanf('%d');
    speed.push(age);

    console.log('Informe a altura em cm: ');
    height = scanf('%d');
    vecHeight.push(height);
}

for (let j = vecHeight.length - 1; j >= 0; j--) {
    console.log(vecHeight[j]);
    console.log(speed[j]);
}