// 33. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

import scanf from 'scanf';

let tempmax = 0;
let tempmin = null;
let avgTemp = 0;
let i = 0;

for (i = 0; i <= 4; i++) {
    console.log('Informe as temperaturas: ');
    const temp = scanf('%f');

    if (!tempmin) {
        tempmin = temp;
    }

    if (temp > tempmax) {
        tempmax = temp;
    } else if (temp < tempmin) {
        tempmin = temp;
    }

    avgTemp += temp;
}

console.log(`Temperatura Maxima de: ${tempmax} Graus
Temperatura Minima de: ${tempmin} Graus
Temperatura Média de: ${avgTemp / i} Graus`);