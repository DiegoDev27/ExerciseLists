// 21. Faça um programa que carregue uma lista com os modelos de cinco carros (exemplo de modelos: FUSCA, GOL, VECTRA etc). Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 2,25 o litro. Abaixo segue uma tela de exemplo. O disposição das informações deve ser o mais próxima possível ao exemplo. Os dados são fictícios e podem mudar a cada execução do programa.
// Comparativo de Consumo de Combustível

// Veículo 1
// Nome: fusca
// Km por litro: 7
// Veículo 2
// Nome: gol
// Km por litro: 10
// Veículo 3
// Nome: uno
// Km por litro: 12.5
// Veículo 4
// Nome: Vectra
// Km por litro: 9
// Veículo 5
// Nome: Peugeout
// Km por litro: 14.5

// Relatório Final
//  1 - fusca           -    7.0 -  142.9 litros - R$ 321.43
//  2 - gol             -   10.0 -  100.0 litros - R$ 225.00
//  3 - uno             -   12.5 -   80.0 litros - R$ 180.00
//  4 - vectra          -    9.0 -  111.1 litros - R$ 250.00
//  5 - peugeout        -   14.5 -   69.0 litros - R$ 155.17
// O menor consumo é do peugeout.

import scanf from "scanf";

const models = [];
const kilometerLiter = [];
const thousandKilometers = [];
const amountLiter = [];
let name = '';
let kilometer = 0;
let economicModel = null;
const distance = 1000;
const price = 2.25;

for (let i = 0; i < 5; i++) {

    console.log('Informe o modelo do carro: ');
    name = scanf('%s');
    models.push(name);

    console.log('Informe quantos km o carro percorre com 1 litro de gasolina:');
    kilometer = scanf('%d');
    kilometerLiter.push(kilometer);

    amountLiter[i] = calculateLiters(distance, kilometerLiter[i]);
    thousandKilometers[i] = Math.floor(calculateLiters(distance, kilometerLiter[i]) * price);

}

for (let j = 0; j < kilometerLiter.length; j++) {
    if (kilometerLiter[j] < kilometerLiter[j + 1]) {
        economicModel = models[j + 1];
    }
}

function calculateLiters(road: number, amountKm: number) {

    return Math.floor(road / amountKm);
}

console.log(`Comparativo de Consumo de Combustível

    Veículo 1
    Nome: ${models[0]}
    Km por litro: ${kilometerLiter[0]}
    Veículo 2
    Nome: ${models[1]}
    Km por litro: ${kilometerLiter[1]}
    Veículo 3
    Nome: ${models[2]}
    Km por litro: ${kilometerLiter[2]}
    Veículo 4
    Nome: ${models[3]}
    Km por litro: ${kilometerLiter[3]}
    Veículo 5
    Nome: ${models[4]}
    Km por litro: ${kilometerLiter[4]}

    Relatório Final
     1 - ${models[0]}           -    ${kilometerLiter[0]} -  ${amountLiter[0]} Litros - R$ ${thousandKilometers[0]}
     2 - ${models[1]}           -    ${kilometerLiter[1]} -  ${amountLiter[1]} Litros - R$ ${thousandKilometers[1]}
     3 - ${models[2]}           -    ${kilometerLiter[2]} -  ${amountLiter[2]} Litros - R$ ${thousandKilometers[2]}
     4 - ${models[3]}           -    ${kilometerLiter[3]} -  ${amountLiter[3]} Litros - R$ ${thousandKilometers[3]}
     5 - ${models[4]}           -    ${kilometerLiter[4]} -  ${amountLiter[4]} Litros - R$ ${thousandKilometers[4]}

     O menor consumo é do ${economicModel}.`);