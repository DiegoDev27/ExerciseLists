// 18. Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

import scanf from 'scanf';

console.log('Informe o dia: ');
const day = scanf('%d');

console.log('Informe o mês: ');
const month = scanf('%d');

console.log('Informe o ano: ');
const year = scanf('%d');

let validate: boolean = false;

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    if (day > 0 && day <= 31) {
        validate = true;
    }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 0 && day <= 30) {
        validate = true;
    }
} else if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        if (day > 0 && day <= 29) {
            validate = true;
        } else if (day > 0 && day <= 28) {
            validate = true;
        }
    }
}
if (validate) {
    console.log('Data valida!');
} else {
    console.log('Data invalida!');
}