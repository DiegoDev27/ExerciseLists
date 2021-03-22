// 13. Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

import scanf from 'scanf';

console.log('Insira um numero: ');
const num = scanf('%f');

if (num === 1) {
    console.log('Domingo');
} else if (num === 2) {
    console.log('Segunda');
} else if (num === 3) {
    console.log('Terça');
} else if (num === 4) {
    console.log('Quarta');
} else if (num === 5) {
    console.log('Quinta');
} else if (num === 6) {
    console.log('Sexta');
} else if (num === 7) {
    console.log('Sabado');
} else {
    console.log('Valor Invalido!');
};