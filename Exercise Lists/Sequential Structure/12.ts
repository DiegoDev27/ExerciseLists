// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

import scanf from 'scanf';

console.log('Informe sua altura: ');
const height = scanf('%d');

console.log(`O peso ideal para sua altura é: ${72.7 * height - 58}`);