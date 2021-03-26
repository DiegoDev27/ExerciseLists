// 23. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.

import scanf from 'scanf';

console.log('Insira o numero: ');
const num = scanf('%d');

const primes = [];
let total = 0;

for (let i = 2; i <= num; i++) {

    let j = 1;
    let divisors = 0;

    while (j <= i) {
        if (i % j === 0) {
            divisors++;
        }
        j++;
    }

    if (divisors <= 2) {
        primes.push(i);
    }

    total += divisors;
}

console.log(`Numeros primos nesse intervalo: ${primes},
            Total de Divisoes: ${total}`);