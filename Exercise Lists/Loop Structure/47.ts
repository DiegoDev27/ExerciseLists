// 47. Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média com as notas restantes). As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Aparecido Parente
// Nota: 9.9
// Nota: 7.5
// Nota: 9.5
// Nota: 8.5
// Nota: 9.0
// Nota: 8.5
// Nota: 9.7
// Resultado final:
// Atleta: Aparecido Parente
// Melhor nota: 9.9
// Pior nota: 7.5
// Média: 9,04

import scanf from 'scanf';

const scores = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let gymnast;
let bestScore = 0;
let worseScore = 0;
let totalScore = 0;
let average = 0;

while (gymnast !== '' && gymnast !== ' ') {

    console.log('Informe o nome do ginasta: ');
    gymnast = scanf('%S');

    if (gymnast === '' || gymnast === ' ') {
        break;
    }

    for (let i = 0; i < 7; i++) {

        console.log(`Informe a nota do jurado numero ${i + 1}: `);
        scores[i] = scanf('%f');

        if (worseScore === 0) {
            worseScore = scores[i];
        }

        if (worseScore > scores[i]) {
            worseScore = scores[i];
        }

        if (scores[i] > bestScore) {
            bestScore = scores[i];
        }

        totalScore += scores[i];
    }

    totalScore = totalScore - (worseScore + bestScore);
    average = totalScore / 5;

    console.log(`Ginasta: ${gymnast}

Nota: ${scores[0]}
Nota: ${scores[1]}
Nota: ${scores[2]}
Nota: ${scores[3]}
Nota: ${scores[4]}
Nota: ${scores[5]}
Nota: ${scores[6]}

Resultado Final:
Ginasta: ${gymnast}
Melhor Nota: ${bestScore}
Pior Nota: ${worseScore}
Media: ${average}
`);
}