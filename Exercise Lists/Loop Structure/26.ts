// 26. Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

import scanf from 'scanf';

console.log('Numero total de eleitores? ');
const voters = scanf('%d');

let vote = 0;
let lula = 0;
let bolsonaro = 0;
let bolsolula = 0;

for (let i = 1; i <= voters; i++) {
    console.log('Tecle "1" para votar no Lula, "2" para votar no Bolsonaro, e "3" para votar no Bolsolula');
    vote = scanf('%d');

    if (vote === 1) {
        lula++;
    } else if (vote === 2) {
        bolsonaro++;
    } else if (vote === 3) {
        bolsolula++;
    }
}

console.log(`Lula recebeu ${lula} votos,
Bolsonaro recebeu ${bolsonaro} votos,
Bolsolula recebeu ${bolsolula} votos.`);