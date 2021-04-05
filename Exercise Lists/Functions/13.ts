// 13. Desenha moldura. Construa uma função que desenhe um retângulo usando os caracteres ‘+’ , ‘−’ e ‘| ‘. Esta função deve receber dois parâmetros, linhas e colunas, sendo que o valor por omissão é o valor mínimo igual a 1 e o valor máximo é 20. Se valores fora da faixa forem informados, eles devem ser modificados para valores dentro da faixa de forma elegante.

import scanf from "scanf";

let lineEntry: number = 0;
let columnEntry: number = 0;

console.log('Informe quantos +-----+, entre 1 e 20: ');
columnEntry = scanf('%d');

console.log('Informe quantos |   |, entre 1 e 20: ');
lineEntry = scanf('%d');

drawFrame(defaultValue(columnEntry), minimumRange(lineEntry));

function drawFrame(columns: number, lines: number): void {
    createColumns(columns);
    createLines(lines, columns);
    createColumns(columns);
}

function createColumns(columns: number): void {
    let l: string = '+';

    for (let i = 0; i < columns; i++) {
        l += '-';
    }
    l += '+';
    console.log(l);
}

function createLines(lines: number, columns: number): void {
    let line = '';
    for (let j = 0; j < lines; j++) {
        line = '|';
        line += ' '.repeat(columns);
        line += '|';

        console.log(line);
    }
}

function defaultValue(value: number) {
    if (value === 0) {
        return 1;
    } else {
        return minimumRange(value);
    }
}

function minimumRange(value: number): any {
    if (value < 1) {
        return 1;
    } else if (value > 20) {
        return 20;
    } else {
        return value;
    }
}