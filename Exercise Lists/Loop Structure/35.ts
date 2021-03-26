// 35. Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário.

import scanf from 'scanf';

console.log('Informe o numero limite para mostrar os primos');
const num = scanf('%d');

const primes = [];

for (let i = 2; i <= num; i++) {

    let j = 1;
    let divisor = 0;

    while (j <= i) {

        if (i % j === 0) {
            divisor++;
        }
        j++;
    }

    if (divisor === 2) {
        primes.push(i);
    }

}

console.log(`Primos neste intervalo: ${primes}`);