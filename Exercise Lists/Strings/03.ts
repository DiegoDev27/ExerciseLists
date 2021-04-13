// 3. Nome na vertical. Faça um programa que solicite o nome do usuário e imprima-o na vertical.

// F
// U
// L
// A
// N
// O

import scanf from "scanf";

console.log('Informe o nome de usuário: ');
const name = scanf('%S');

const resultName = nameVertically(name);

console.log('\n' + resultName);


function nameVertically(text: string): string {
    let result = '';

    for (let i = 0; i <= text.length - 1; i++) {
        result += text[i] + '\n';
    }

    return result;
}
