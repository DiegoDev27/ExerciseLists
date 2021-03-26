// 22. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.

import scanf from 'scanf';

console.log('Insira o numero: ');
const num = scanf('%f');

let divisor = 0;
let i = 0;
const divisible = [];

while (i <= num) {
    if (num % i === 0) {
        divisor++;
        if (num % divisor === 0) {
            divisible.push(divisor);
        }
    }
    i++;
}

if (divisor <= 2) {

    console.log(`${num} é um numero primo!`);

} else if (divisor > 2) {
    console.log(`${num} não é um numero primo!`);
    console.log(`Divisivel por: ${divisible}`);
}