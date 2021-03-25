// 12. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50

import scanf from 'scanf';

console.log('Informe o numero que deseja saber a tabuada; ');
const num = scanf('%d');

let i: number = 0;

console.log(`TABUADA DE ${num}`);
while (num >= 0 && i < 10) {
    i++;
    console.log(`${num} X ${i} = ${num * i}`);
}
