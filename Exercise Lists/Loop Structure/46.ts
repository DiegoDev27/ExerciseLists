// 46. Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Rodrigo Curvêllo
// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m
// Melhor salto:  6.5 m
// Pior salto: 5.3 m
// Média dos demais saltos: 5.9 m
// Resultado final:
// Rodrigo Curvêllo: 5.9 m

import scanf from 'scanf';

const jumpNames = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto'];

const jump = [0.0, 0.0, 0.0, 0.0, 0.0];

let bestJump = 0;
let worseJump = 0;
let avgJump = 0;
let totalJump = 0;
let athlete;

while (athlete !== ' ' && athlete !== '') {

    console.log('Informe o nome do Atleta: ');
    athlete = scanf('%S');

    if (athlete === ' ' || athlete === '') {
        break;
    }

    for (let i = 0; i < 5; i++) {
        console.log(`${jumpNames[i]} salto em metros:`);
        jump[i] = scanf('%f');

        if (worseJump === 0) {
            worseJump = jump[i];
        }

        if (worseJump > jump[i]) {
            worseJump = jump[i];
        }

        if (jump[i] > bestJump) {
            bestJump = jump[i];
        }

        totalJump += jump[i];

    }

    totalJump = totalJump - (worseJump + bestJump);

    avgJump = totalJump / 3;

    console.log(`Atleta: ${athlete}

    ${jumpNames[0]} salto: ${jump[0]}m
    ${jumpNames[1]} salto: ${jump[1]}m
    ${jumpNames[2]} salto: ${jump[2]}m
    ${jumpNames[3]} salto: ${jump[3]}m
    ${jumpNames[4]} salto: ${jump[4]}m

    Melhor Salto: ${bestJump}m
    Pior Salto: ${worseJump}m
    Media dos demais Saltos: ${avgJump}m

    Resultado Final:
    ${athlete}: ${avgJump}m`);
}