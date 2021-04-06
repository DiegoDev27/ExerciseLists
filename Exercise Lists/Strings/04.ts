// 4. Nome na vertical em escada. Modifique o programa anterior de forma a mostrar o nome em formato de escada.

// F
// FU
// FUL
// FULA
// FULAN
// FULANO

import scanf from "scanf";

console.log('Informe o nome de usuário: ');
const name = scanf('%S');

const resultName = nameVertically(name);

console.log(resultName);


function nameVertically(text: string): string {
    let result = '';

    for (let i = 0; i <= text.length - 1; i++) {
        result += text.slice(0, i + 1) + '\n';
    }

    return result;
}
