// 37. Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes

import scanf from 'scanf';

let code = null;
let height = null;
let weight = null;
let heightSum = 0;
let avgHeight = 0;
let weightSum = 0;
let avgWeight = 0;
let codeCount = 0;
let higher = 0;
let lower = null;
let fatter = 0;
let thinner = null;
let codeThinner = null;
let codeFatter = null;
let codeLower = null;
let codeHigher = null;

while (true) {

    console.log('Informe seu código: ');
    code = scanf('%d');
    if (code === 0) {
        break;
    }
    console.log('Informe sua altura em cm: ');
    height = scanf('%d');

    console.log('Informe seu peso: ');
    weight = scanf('%d');

    if (height > higher) {
        codeHigher = code;
        higher = height;
    }

    if (weight > fatter) {
        codeFatter = code;
        fatter = weight;
    }

    if (!lower) {
        lower = height;
    }

    if (lower > height) {
        codeLower = code;
        lower = height;
    }

    if (!thinner) {
        thinner = weight;
    }

    if (thinner > weight) {
        codeThinner = code;
        thinner = weight;
    }

    heightSum += height;
    weightSum += weight;
    codeCount++;
}

avgHeight = heightSum / codeCount;
avgWeight = weightSum / codeCount;

console.log(`Cliente mais alto Código:${codeHigher}, Altura:${higher}
Cliente mais baixo Código:${codeLower}, Altura:${lower}
Cliente mais gordo Código:${codeFatter}, Peso:${fatter}
Cliente mais magro Código:${codeThinner}, Peso: ${thinner}
Média dos pesos:${avgWeight}
Média da Altura:${avgHeight}`);