// 17. Em uma competição de salto em distância cada atleta tem direito a cinco saltos. O resultado do atleta será determinado pela média dos cinco valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe o nome, os saltos e a média dos saltos. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Rodrigo Curvêllo

// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m

// Resultado final:
// Atleta: Rodrigo Curvêllo
// Saltos: 6.5 - 6.1 - 6.2 - 5.4 - 5.3
// Média dos saltos: 5.9 m

import scanf from "scanf";

const vec = [];
let jump = 0;
let total = 0;
let average = 0;
let name;

while (name !== null && name !== '' && name !== ' ') {

    console.log('Informe o nome do atleta: ');
    name = scanf('%S');

    if (name === null || name === '' || name === ' ') {
        break;
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Informe a distancia do salto ${i + 1}: `);
        jump = scanf('%f');
        vec.push(jump);
    }

    for (let j = vec.length - 1; j >= 0; j--) {
        total += vec[j];
    }

    average += total / 5;

    console.log(`Atleta: ${name}
	Primeiro Salto: ${vec[0]}m
	Segundo Salto: ${vec[1]}m
	Terceiro Salto: ${vec[2]}m
	Quarto Salto: ${vec[3]}m
	Quinto Salto: ${vec[4]}m

	Resultado Final:
	Atleta: ${name}
	Saltos: ${vec[0]}m - ${vec[1]}m - ${vec[2]}m - ${vec[3]}m - ${vec[4]}m
	Média dos Saltos: ${average}m`);
}