// 7. Conta espaços e vogais. Dado uma string com uma frase informada pelo usuário (incluindo espaços em branco), conte:

// quantos espaços em branco existem na frase.
// quantas vezes aparecem as vogais a, e, i, o, u.

import scanf from "scanf";

console.log('Digite a frase: ');
const phrase = scanf('%S');

const amountVowels = countVowels(phrase);
const amountWhiteSpaces = countWhiteSpaces(phrase);

console.log(`Quantidade de Vogais: ${amountVowels}
Quantidade de espaços em branco: ${amountWhiteSpaces}`);

function countVowels(stringPhrase: string): number {

    let count = 0;

    for (let i = stringPhrase.length; i >= 0; i--) {
        if (stringPhrase[i] === 'a' || stringPhrase[i] === 'e' || stringPhrase[i] === 'i' || stringPhrase[i] === 'o' || stringPhrase[i] === 'u')
            count++;
    }

    return count;
}

function countWhiteSpaces(stringPhrase: string): number {

    let count = 0;

    for (let i = stringPhrase.length; i >= 0; i--) {
        if (stringPhrase[i] === ' ') {
            count++;
        }
    }
    return count;
}