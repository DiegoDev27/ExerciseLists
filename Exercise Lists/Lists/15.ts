// 15. Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:
// Mostre a quantidade de valores que foram lidos;
// Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
// Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
// Calcule e mostre a soma dos valores;
// Calcule e mostre a média dos valores;
// Calcule e mostre a quantidade de valores acima da média calculada;
// Calcule e mostre a quantidade de valores abaixo de sete;
// Encerre o programa com uma mensagem;

import scanf from "scanf";

const vec = [];
let values = 0;
let i = 0;
const reverse = [];
let sum = 0;
let average = 0;
const higherValue = [];
const lowerValue = [];

for (i = 0; i < 10; i++) {
    console.log('Informe os valores: ');
    values = scanf('%d');

    if (values === -1) {
        break;
    }

    vec.push(values);
}

for (let j = vec.length - 1; j >= 0; j--) {
    reverse.push(vec[j]);
    sum += vec[j];
}

average = sum / vec.length;

for (let x = vec.length - 1; x >= 0; x--) {
    if (vec[x] > average) {
        higherValue.push(vec[x]);
    }
}

for (let y = vec.length - 1; y >= 0; y--) {
    if (vec[y] < 7) {
        lowerValue.push(vec[y]);
    }
}

console.log(`Quantidade de valores lidos: ${i}
Valores lidos: ${vec}
Valores na ordem inversa: ${reverse}
Soma dos valores: ${sum}
Média dos valores: ${average}
Valores acima da média calculada: ${higherValue}
Valores abaixo de 7: ${lowerValue}

That's All Folks!`);