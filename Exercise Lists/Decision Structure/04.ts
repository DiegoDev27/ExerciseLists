// 4. Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

import scanf from 'scanf';

console.log('Digite uma letra: ');
const letter = scanf('%s');

if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u') {
    console.log(`${letter} é uma consoante.`);
} else {
    console.log(`${letter} é uma vogal.`);
}