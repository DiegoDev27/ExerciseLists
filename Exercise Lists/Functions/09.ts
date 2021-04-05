// 9. Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.

import scanf from "scanf";

let num: number = 0;
let convert: string;
let result: string;

console.log('Informe o numero: ');
num = scanf('%d');

console.log(num);

convert = num.toString();

console.log('Ordem reversa: ' + reverseNumber(convert));

function reverseNumber(txt: string): string {
    console.log(txt.length);
    for (let i = txt.length - 1; i >= 0; i--) {
        result += txt[i];
    }
    return result;
}