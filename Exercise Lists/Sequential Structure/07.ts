// 7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

import scanf from 'scanf';

console.log('Informe a aresta:');
const edge = scanf('%f');

console.log(`O dobro da area é : ${edge * edge * 2}`);