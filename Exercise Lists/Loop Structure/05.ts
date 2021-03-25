// 5. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

import scanf from 'scanf';

console.log('Informe a população do menor país: ');
let popA = scanf('%d');

console.log('Informe a população do maior país: ');
let popB = scanf('%d');

console.log('Informe a taxa de crescimento anual do primeiro país: ');
let rateA = scanf('%f');

console.log('Informe a taxa de crescimento anual do segundo país: ');
let rateB = scanf('%f');

let count: number = 0;

while (rateA < rateB || popA > popB) {
    console.log('Dados incorretos, a taxa do primeiro país precisa ser maior que a do segundo, e a população do primeiro menor que do segundo: Insira as informações novamente: ');

    console.log('população do primeiro país: ');
    popA = scanf('%d');

    console.log('população do segundo país: ');
    popB = scanf('%d');

    console.log('Taxa de crescimento anual do primeiro país: ');
    rateA = scanf('%f');

    console.log('Taxa de crescimento anual do segundo país: ');
    rateB = scanf('%f');
}

while (popA < popB) {
    popA = popA + (popA * rateA);
    popB = popB + (popB * rateB);
    count++;
}

console.log(`Levará ${count} anos para a população do país A igualar ao país B.`);