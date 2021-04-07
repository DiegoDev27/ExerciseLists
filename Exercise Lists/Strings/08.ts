// 8. Palíndromo. Um palíndromo é uma seqüência de caracteres cuja leitura é idêntica se feita da direita para esquerda ou vice−versa. Por exemplo: OSSO e OVO são palíndromos. Em textos mais complexos os espaços e pontuação são ignorados. A frase SUBI NO ONIBUS é o exemplo de uma frase palíndroma onde os espaços foram ignorados. Faça um programa que leia uma seqüência de caracteres, mostre−a e diga se é um palíndromo ou não.

import scanf from "scanf";

console.log('Digite uma sequencia de caracteres: ');
const characteres = scanf('%S');

const palindrome = checkPalindrome(characteres);

console.log(palindrome);


function removeWhiteSpaces(chars: string): string {

    let charsOutWhiteSpaces = '';

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== ' ') {
            charsOutWhiteSpaces += chars[i];
        }
    }

    return charsOutWhiteSpaces;
}

function checkPalindrome(chars: string): string {

    let result = '';
    let count = 0;

    const charsOutWhiteSpaces = removeWhiteSpaces(chars);
    let charsReverse = '';

    for (let j = charsOutWhiteSpaces.length - 1; j >= 0; j--) {
        charsReverse += charsOutWhiteSpaces[j];
    }

    for (let x = charsOutWhiteSpaces.length - 1; x >= 0; x--) {
        if (charsOutWhiteSpaces[x] !== charsReverse[x]) {
            count++;
        }
    }

    if (count === 0) {
        result = 'Essa sequencia de caracteres é palindroma';
    } else {
        result = 'Essa sequencia de caracteres não é palindroma';
    }

    return result;
}