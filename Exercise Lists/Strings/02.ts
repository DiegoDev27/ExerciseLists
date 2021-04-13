// 02. Nome ao contrário em maiúsculas. Faça um programa que permita ao usuário digitar o seu nome e em seguida mostre o nome do usuário de trás para frente utilizando somente letras maiúsculas. Dica: lembre−se que ao informar o nome o usuário pode digitar letras maiúsculas ou minúsculas.

import scanf from "scanf";

console.log('Informe o nome do usuário: ');
const name = scanf('%S');

const nameReverse = stringReverse(name);

console.log(nameReverse);


function stringReverse(text: string): string {

    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    return result.toUpperCase();
}