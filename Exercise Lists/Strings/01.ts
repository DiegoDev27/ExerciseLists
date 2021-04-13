// 1. Tamanho de strings. Faça um programa que leia 2 strings e informe o conteúdo delas seguido do seu comprimento. Informe também se as duas strings possuem o mesmo comprimento e são iguais ou diferentes no conteúdo.

// Compara duas strings
// String 1: Brasil Hexa 2006
// String 2: Brasil! Hexa 2006!
// Tamanho de "Brasil Hexa 2006": 16 caracteres
// Tamanho de "Brasil! Hexa 2006!": 18 caracteres
// As duas strings são de tamanhos diferentes.
// As duas strings possuem conteúdo diferente.

import scanf from "scanf";

console.log('Digite a primeira frase: ');
const string1 = scanf('%S');

console.log('Digite a segunda frase: ');
const string2 = scanf('%S');

const vec = stringsSize(string1, string2);

const stringResult = stringSizeCompare(vec);
const stringResult2 = stringContentCompare(string1, string2, vec);


console.log(`String 1: ${string1}
String 2: ${string2}
Tamanho de ${string1}: ${vec[0]} caracteres
Tamanho de ${string2}: ${vec[1]} caracteres
${stringResult}
${stringResult2}`);

function stringsSize(text1: string, text2: string): number[] {

    let count1 = 0;
    let count2 = 0;
    const vector: number[] = [];

    for (let i = text1.length - 1; i >= 0; i--) {
        count1++;
    }

    for (let j = text2.length - 1; j >= 0; j--) {
        count2++;
    }

    vector.push(count1, count2);

    return vector;
}


function stringSizeCompare(vector: number[]): string {

    let textResult = '';

    if (vector[0] !== vector[1]) {
        textResult = 'As duas strings são de tamanhos diferentes.';
    } else {
        textResult = 'As duas string são de tamanhos iguais.';
    }

    return textResult;
}


function stringContentCompare(text1: string, text2: string, vector: number[]): string {

    let count = 0;
    let textResult2 = '';

    if (vector[0] === vector[1]) {
        for (let i = text1.length - 1; i >= 0; i--) {
            if (text1[i] !== text2[i]) {
                count++;
            }
            if (count > 0) {
                textResult2 = 'As duas strings possuem conteúdo diferente.';
            }
            else {
                textResult2 = 'As duas strings possuem conteúdo iguais.';
            }
        }
    } else {
        textResult2 = 'As duas strings possuem conteúdo diferente.';
    }

    return textResult2;
}