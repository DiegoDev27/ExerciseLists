// 36. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
// Montar a tabuada de: 5
// Começar por: 4
// Terminar em: 7
//
// Vou montar a tabuada de 5 começando em 4 e terminando em 7:
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35
// Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

import scanf from 'scanf';

console.log('Mostrar Tabuda de: ');
const num = scanf('%d');

console.log('Commeçar por: ');
let first = scanf('%d');

console.log('Terminar em: ');
let final = scanf('%d');

while (final < first) {
    console.log('Digitou o final menor que o começo, Insira novamente:');

    console.log('Digite o Inicio: ');
    first = scanf('%d');

    console.log('Digite o fim: ');
    final = scanf('%d');
}

console.log(`Vou montar a tabuada de ${num} começando em ${first} e terminando em ${final}: `);

for (first; first <= final; first++) {
    console.log(`${num} X ${first} = ${num * first}`);
}