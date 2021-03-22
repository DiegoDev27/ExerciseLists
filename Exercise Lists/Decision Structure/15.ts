// 15. Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

import scanf from 'scanf';

console.log('Insira o primeiro lado do triangulo: ');
const side1 = scanf('%f');

console.log('Insira o segundo lado do triangulo: ');
const side2 = scanf('%f');

console.log('Insira o terceiro lado do triangulo: ');
const side3 = scanf('%f');

if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side1 > side3 || side2 + side3 > side1 || side3 + side1 > side2 || side3 + side2 > side1) {
    console.log('Isto é um triangulo!');

    if (side1 === side2 && side1 === side3) {
        console.log('Isto é um triangulo Equilatero!');
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log('Isto é um triangulo Isósceles!');
    } else {
        console.log('Isto é um triangulo Escaleno!');
    }
} else {
    console.log('Isto nao é um triangulo!');
}