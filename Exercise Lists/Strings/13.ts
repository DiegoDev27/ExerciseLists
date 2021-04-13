// 13. Jogo da palavra embaralhada. Desenvolva um jogo em que o usuário tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras lidas de um arquivo texto e escolherá uma aleatoriamente. O jogador terá seis tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se o usuário ganhou ou perdeu o jogo.

import scanf from "scanf";
import * as fs from "fs";

const txt = fs.readFileSync('words.txt');
const words = txt.toString();
const separateWords = words.split('\n');
const random = Math.floor(Math.random() * separateWords.length);
const randomWord = separateWords[random];

const resultAttempts = trial(randomWord);

console.log(resultAttempts);


function shuffleWord(wordRandomed: string) {

    const vector: number[] = [];
    let shuffle = '';

    while (wordRandomed.length !== shuffle.length) {

        const randomNumber = Math.floor(Math.random() * wordRandomed.length);

        if (!vector.find(x => x === randomNumber)) {
            vector.push(randomNumber);
            shuffle += wordRandomed[randomNumber];
        }
    }

    return shuffle;
}


function trial(wordRandomed: string) {

    const shuffled = shuffleWord(randomWord);

    let error = 0;
    let result = '';

    while (error !== 6) {

        console.log(`Que palavra é esta? -> ${shuffled}`);
        const answer = scanf('%S');

        if (wordRandomed !== answer) {
            console.log('\n' + `${error + 1}ª tentativa errada! (Maximo de 6 tentativas)` + '\n');
            error++;
        }

        if (error === 6) {
            result = '\n' + `Você perdeu! A resposta era ${wordRandomed}` + '\n';
            break;
        }

        if (wordRandomed === answer) {
            result = '\n' + `Parabéns, Você acertou! A Palavra é: ${wordRandomed}`;
            break;
        }
    }

    return result;
}