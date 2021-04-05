// 13. Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, calcule a média anual das temperaturas e mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso: 1 – Janeiro, 2 – Fevereiro, . . . ).

import scanf from "scanf";

const vec = [];
const position = [];
let average = 0;
let temperature = 0;
let totalTemp = 0;

for (let i = 0; i < 12; i++) {
    console.log(`Informe a média da temperatura do mês em Celsius ${i + 1}: `);
    temperature = scanf('%d');
    vec.push(temperature);

    totalTemp += temperature;
}

average = totalTemp / 12;

for (let j = vec.length; j >= 1; j--) {
    if (vec[j] > average) {
        position.push(j);
    }
}

console.log('Meses que tiveram temperatura acima da média anual: ');

for (let x = position.length - 1; x >= 0; x--) {

    switch (position[x]) {

        case 1:
            console.log('1 - Janeiro');
            break;

        case 2:
            console.log('2 - Fevereiro');
            break;

        case 3:
            console.log('3 - Março');
            break;

        case 4:
            console.log('4 - Abril');
            break;

        case 5:
            console.log('5 - Maio');
            break;

        case 6:
            console.log('6 - Junho ');
            break;

        case 7:
            console.log('7 - Julho');
            break;

        case 8:
            console.log('8 - Agosto');
            break;

        case 9:
            console.log('9 - Setembro');
            break;

        case 10:
            console.log('10 - Outubro');
            break;

        case 11:
            console.log('11 - Novembro');
            break;

        case 12:
            console.log('12 - Dezembro');
            break;
    }
}