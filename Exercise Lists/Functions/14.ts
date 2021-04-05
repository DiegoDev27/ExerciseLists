// 14. Quadrado mágico. Um quadrado mágico é aquele dividido em linhas e colunas, com um número em cada posição e no qual a soma das linhas, colunas e diagonais é a mesma. Por exemplo, veja um quadrado mágico de lado 3, com números de 1 a 9:

// 8  3  4
// 1  5  9
// 6  7  2

// Elabore uma função que identifica e mostra na tela todos os quadrados mágicos com as características acima. Dica: produza todas as combinações possíveis e verifique a soma quando completar cada quadrado. Usar um vetor de 1 a 9 parece ser mais simples que usar uma matriz 3x3.

import scanf from "scanf";

const sprintf = require('sprintf-js').sprintf;

let squareSize: number = 0;
let mainDiagonalSum = 0;
let secondaryDiagonalSum = 0;
let matrix: number[][] = [];

console.log('Informe o tamanho do quadrado: ');
squareSize = scanf('%d');

matrix = populateMatrix(squareSize);

matrix.length = squareSize;

for (let i = 0; i < matrix.length; i++) {
    matrix[i] = populateArray(squareSize);
}

matrixRead(squareSize, matrix);
matrixShow(squareSize, matrix);

mainDiagonalSum = firstDiagonalSum(squareSize, matrix);
secondaryDiagonalSum = secondDiagonalSum(squareSize, matrix);

const lineVector = [squareSize];
linesSum(squareSize, matrix, lineVector);

console.log('\nSoma das linhas: ');
showVector(lineVector, squareSize);

const columnVector: number[] = [squareSize];
columnsSum(squareSize, matrix, columnVector);

console.log('\nSoma das colunas: ');
showVector(columnVector, squareSize);

console.log(`\nSoma da diagonal principal: ${mainDiagonalSum}`);
console.log(`Soma da diagonal secundaria: ${secondaryDiagonalSum}\n`);

let testLine;
let testColumn;

testLine = testVectorEquality(lineVector, squareSize);
testColumn = testVectorEquality(columnVector, squareSize);

if (testLine && testColumn && mainDiagonalSum === secondaryDiagonalSum && mainDiagonalSum === lineVector[0]) {
    console.log('O quadrado é magico!');
} else {
    console.log('O quadrado não é magico!');
}

function matrixRead(size: number, mat: number[][]) {

    console.log('\nAgora informe os numeros para saber se o quadrado é magico ou não: ');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            mat[j][i] = scanf('%d');
        }
    }
    console.log('\n');
}

function matrixShow(size: number, mat: number[][]) {

    const higherNumber = maiorNumeroMatriz(mat, size);

    for (let i = 0; i < size; i++) {
        let text = '';
        for (let j = 0; j < size; j++) {
            text += ' ' + formatNumber(mat[j][i], higherNumber.toString().length);
        }
        console.log(text);
    }
}

function maiorNumeroMatriz(mat: number[][], size: number) {

    let higherNumber = 0;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (higherNumber < mat[i][j]) {
                higherNumber = mat[i][j];
            }
        }
    }
    return higherNumber;
}

function formatNumber(num: number, size: number) {

    const stringNumber = num.toString();

    let result = '';

    if (stringNumber.length === size) {
        return stringNumber;
    }

    if (stringNumber.length > size) {
        throw new Error('Tamanho do numero deve ser menor que o tamanho da string');
    }

    for (let i = 0; i < size - stringNumber.length; i++) {
        result += ' ';
    }

    return result + stringNumber;
}

function firstDiagonalSum(size: number, mat: number[][]): number {

    let sum: number = 0;

    for (let i = 0; i < size; i++) {
        sum += mat[i][i];
    }
    return sum;
}

function secondDiagonalSum(size: number, mat: number[][]): number {

    let sum: number = 0;

    for (let i = 0; i < size; i++) {
        sum += mat[i][size - i - 1];
    }
    return sum;
}

function showVector(vec: number[], size: number): void {

    for (let i = 0; i < size; i++) {
        console.log(vec[i]);
    }
}

function linesSum(size: number, mat: number[][], vec: number[]): void {

    for (let i = 0; i < size; i++) {
        vec[i] = 0;
        for (let j = 0; j < size; j++) {
            vec[i] += mat[i][j];
        }
    }
}

function columnsSum(size: number, mat: number[][], vec: number[]): void {

    for (let j = 0; j < size; j++) {
        vec[j] = 0;
        for (let i = 0; i < size; i++) {
            vec[j] += mat[i][j];
        }
    }
}

function testVectorEquality(vec: number[], size: number): number {

    for (let i = 1; i < size; i++) {
        if (vec[i] !== vec[i - 1]) {
            return 0;
        }
    }
    return 1;
}

function populateArray(size: number): number[] {

    const result = [];

    for (let i = 0; i < size; i++) {
        result.push(0);
    }
    return result;
}

function populateMatrix(size: number): number[][] {

    const result = [];

    for (let i = 0; i < size; i++) {
        result.push([]);
    }
    return result;
}