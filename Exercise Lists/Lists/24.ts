// 24. Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido. Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios, simulando os lançamentos dos dados.

import scanf from "scanf";

const result = [];
const count = [0, 0, 0, 0, 0, 0];
let randomNumber = 0;

for (let i = 0; i < 100; i++) {

    randomNumber = getRandomArbitrary(1, 6);
    result.push(randomNumber);

    switch (randomNumber) {

        case 1:
            count[0]++;
            break;

        case 2:
            count[1]++;

        case 3:
            count[2]++;

        case 4:
            count[3]++;

        case 5:
            count[4]++;

        case 6:
            count[5]++;

        default:
            break;
    }
}

console.log(result);
console.log(count);

function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}