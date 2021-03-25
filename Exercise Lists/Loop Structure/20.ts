// 20. Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.

import scanf from 'scanf';

let num;

while (true) {
    console.log('Informe o numero: ');
    num = scanf('%d');

    if (!num || (num < 16 && num > 0)) {

        let factorial: number = num;

        let i = num;

        while (i > 1 && i < 16) {
            factorial = factorial * (i - 1);
            i--;
        }

        console.log(factorial);

    }

    if (num <= 0 || num >= 16) {
        console.log('Numero invalido, insira novamente:');
    }
}