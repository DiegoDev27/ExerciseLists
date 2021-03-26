// 44. Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:
// 1 , 2, 3, 4  - Votos para os respectivos candidatos
// (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
// 5 - Voto Nulo
// 6 - Voto em Branco
// Faça um programa que calcule e mostre:
// O total de votos para cada candidato;
// O total de votos nulos;
// O total de votos em branco;
// A percentagem de votos nulos sobre o total de votos;
// A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos tem-se o valor zero.

import scanf from 'scanf';

let vote = null;
let lula = 0;
let bolsonaro = 0;
let amoedo = 0;
let ciro = 0;
let voteNul = 0;
let white = 0;
let total = 0;

while (vote !== 0) {

    if (vote === 0) {
        break;
    }

    console.log(`Escolha seu candidato:

    1 - Lula
    2 - Bolsonaro
    3 - Amoedo
    4 - Ciro
    5 - Voto Nulo
    6 - Voto em Branco

    Digite 0 para encerrar.`);
    vote = scanf('%d');

    if (vote === 1) {
        lula++;
    }

    if (vote === 2) {
        bolsonaro++;
    }

    if (vote === 3) {
        amoedo++;
    }

    if (vote === 4) {
        ciro++;
    }

    if (vote === 5) {
        voteNul++;
    }

    if (vote === 6) {
        white++;
    }
}

total = lula + bolsonaro + amoedo + ciro + voteNul + white;

console.log(`Total de votos do candidato Lula: ${lula}
Total de votos do candidato Bolsonaro: ${bolsonaro}
Total de votos do candidato Amoedo: ${amoedo}
Total de votos do candidato Ciro: ${ciro}
Total de votos nulo: ${voteNul}
Total de votos em branco: ${white}
Porcentagem de votos nulo sobre o total de votos: ${(voteNul / total) * 100}%
Porcentagem de votos em branco sobre o total de votos: ${(white / total) * 100}%`);