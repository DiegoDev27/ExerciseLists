// 2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

import scanf from 'scanf';

console.log('Informe o Nome de Usuário: ');
let name = scanf('%s');

console.log('Informe a Senha de Usuário: ');
let password = scanf('%s');

while (name === password) {
    console.log('Não pode nome de Usuario e Senha iguais, por favor, Digite Novamente: ');

    console.log('Nome de Usuário: ');
    name = scanf('%s');

    console.log('Senha de Usuário: ');
    password = scanf('%s');
}