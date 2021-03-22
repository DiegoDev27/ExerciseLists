// 3. Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

import scanf from 'scanf';

console.log('Informe o sexo (M) para mulher e (H) para homem: ');
const gender = scanf('%s');

if (gender !== 'M' && gender !== 'H') {
    console.log('Codigo invalido!');
}