// 12. Embaralha palavra. Construa uma função que receba uma string como parâmetro e devolva outra string com os carateres embaralhados. Por exemplo: se função receber a palavra python, pode retornar npthyo, ophtyn ou qualquer outra combinação possível, de forma aleatória. Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados.

import scanf from "scanf";

let read: string;

console.log('Digite qualquer palavra: ');
read = scanf('%s');

console.log(shufflesWord(read.length).toUpperCase());

function shufflesWord(length: number) {
    const result: number[] = [];
    const resultLength: number = read.length;
    let index: number = 0;
    let shufflesResult: string = '';

    while (index < resultLength) {

        const randomNumber: number = Math.floor(Math.random() * resultLength);

        if (result.findIndex((x) => x === randomNumber) === -1) {
            result.push(randomNumber);
            index++;
        }
    }
    for (let i = 0; i < result.length; i++) {
        shufflesResult += read[result[i]];
    }
    return shufflesResult;
}
