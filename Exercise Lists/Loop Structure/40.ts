// 40. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito. Foram obtidos os seguintes dados:
// Código da cidade;
// Número de veículos de passeio (em 1999);
// Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
// Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
// Qual a média de veículos nas cinco cidades juntas;
// Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.

import scanf from 'scanf';

let code = null;
let vehicles = 0;
let accidents = 0;
let lowestIndex = null;
let higherIndex = 0;
let lowerCode = null;
let higherCode = null;
let vehiclesSum = 0;
let accidentSum = 0;
const divisor = 5;

for (let i = 1; i <= 5; i++) {
    console.log('Informe o código da cidade: ');
    code = scanf('%s');

    console.log('Informe o numero de veiculos: ');
    vehicles = scanf('%d');

    console.log('Informe o numero de acidentes: ');
    accidents = scanf('%d');

    if (accidents > higherIndex) {
        higherCode = code;
        higherIndex = accidents;
    }

    if (!lowestIndex) {
        lowestIndex = accidents;
    }

    if (lowestIndex > accidents) {
        lowerCode = code;
        lowestIndex = accidents;
    }

    if (vehicles < 2000) {
        accidentSum += accidents;
    }

    vehiclesSum += vehicles;
}

console.log(`Menor indice de acidentes Quantidade: ${lowestIndex}, Código: ${lowerCode}
Maior indice de acidentes Quantidade: ${higherIndex}, Código: ${higherCode}
Média de veiculos de todas cidades: ${vehiclesSum / divisor}
Média de acidentes nas cidades com menos de 2000 vehicles: ${accidentSum / divisor}`);