// 16. Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
// a: Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
// b: Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
// c: Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
// d: Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;

import scanf from 'scanf';

console.log('Informe o valor de "a": ');
const a = scanf('%f');

console.log('Informe o valor de "b": ');
const b = scanf('%f');

console.log('Informe o valor de "c": ');
const c = scanf('%f');

const num: number = 4;
const delta: number = b * b - (num * a * c);
const x1: number = - (b - Math.sqrt(delta)) / (2 * a);
const x2: number = - (b + Math.sqrt(delta)) / (2 * a);

if (a === 0) {
    console.log('Esta equação nao é de segundo grau. Programa encerrado.');
} else if (delta < 0) {
    console.log('Esta equação nao possui raizes reais. Programa encerrado.');
} else if (delta === 0) {

    if (x1 > 0) {
        console.log(`Esta equação possui apenas uma raiz real. Ela é ${x1} `);
    } else {
        console.log(`Esta equação possui apenas uma raiz real. Ela é ${x2} `);
    }
} else if (delta > 0) {
    console.log(`Esta equação possui duas raizes reais. Elas são ${x1} e ${x2}`);
}