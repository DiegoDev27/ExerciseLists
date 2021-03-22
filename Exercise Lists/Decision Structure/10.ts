// 10. Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

import scanf from 'scanf';

console.log('Em que turno você estuda? Digite (M) para Matutino, (V) para Vespertino e (N) para Norturno: ');
const shift = scanf('%s');

if (shift === 'M') {
    console.log('Bom Dia!');
} else if (shift === 'V') {
    console.log('Boa Tarde!');
} else if (shift === 'N') {
    console.log('Boa Noite!');
} else {
    console.log('Valor Invalido!');
}