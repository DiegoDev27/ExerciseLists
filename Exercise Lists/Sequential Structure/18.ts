// 18. Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

import scanf from 'scanf';

console.log('Informe o tamanho do arquivo em MB para download: ');
const size = scanf('%f');

console.log('Informe a velocidade da internet em MB: ')
const speed = scanf('%f');

console.log(`O tempo estimado para download é de ${size / (speed / 8) / 60} minutos`);