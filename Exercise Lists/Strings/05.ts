// 5. Nome na vertical em escada invertida. Altere o programa anterior de modo que a escada seja invertida.

// FULANO
// FULAN
// FULA
// FUL
// FU
// F

import scanf from "scanf";

console.log('Informe o nome de usuário: ');
const name = scanf('%S');

const resultName = nameVertically(name);

console.log('\n' + resultName);


function nameVertically(text: string): string {
    let result = '';

    for (let i = text.length; i > 0; i--) {
        result += text.slice(0, i) + '\n';
    }

    return result;
}
