// 11. Jogo de Forca. Desenvolva um jogo da forca. O programa terá uma lista de palavras lidas de um arquivo texto e escolherá uma aleatoriamente. O jogador poderá errar 6 vezes antes de ser enforcado.

// Digite uma letra: A
// -> Você errou pela 1ª vez. Tente de novo!

// Digite uma letra: O
// A palavra é: _ _ _ _ O

// Digite uma letra: E
// A palavra é: _ E _ _ O

// Digite uma letra: S
// -> Você errou pela 2ª vez. Tente de novo!


import scanf from "scanf";
import * as fs from "fs";

hangman();

function hangman() {

    const txt = fs.readFileSync('words.txt');
    const words = txt.toString();
    const separateWords = words.split('\n');
    const random = Math.floor(Math.random() * separateWords.length);

    const randomWord = separateWords[random];

    let error = 0;
    let resultWord = '';

    const word = wordLength(randomWord);


    console.log('\n' + word.toString().replace(/,/g, "") + '\n');

    while (word.find(x => x === '_ ')) {

        let hit = false;

        resultWord = word.toString().replace(/,/g, "");

        if (error === 6) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|    O ');
            console.log('|   /|\\ ');
            console.log('|    | ');
            console.log('|   / \\ ');
            console.log('_       ');
            console.log();

            if (error === 6) {
                console.log(`Morreu! A palavra era ${randomWord}` + '\n');
                console.log('\n' + 'Fim de Jogo, Você perdeu!' + '\n');
                break;
            }
        }

        if (error === 5) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|    O ');
            console.log('|   /|\\');
            console.log('|    | ');
            console.log('|   /  ');
            console.log('_      ');
            console.log();
        }

        if (error === 4) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|    O ');
            console.log('|   /|\\');
            console.log('|    | ');
            console.log('|      ');
            console.log('_       ');
            console.log();
        }

        if (error === 3) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|    O ');
            console.log('|   /| ');
            console.log('|    | ');
            console.log('|      ');
            console.log('_      ');
            console.log();
        }

        if (error === 2) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|    O ');
            console.log('|    | ');
            console.log('|    | ');
            console.log('|      ');
            console.log('_      ');
            console.log();
        }

        if (error === 1) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|    O ');
            console.log('|      ');
            console.log('|      ');
            console.log('|      ');
            console.log('_      ');
            console.log();
        }

        if (error === 0) {
            console.log();
            console.log('|----- ');
            console.log('|    | ');
            console.log('|      ');
            console.log('|      ');
            console.log('|      ');
            console.log('|      ');
            console.log('_      ');
            console.log();
        }

        console.log('\n' + 'Digite uma letra: ' + '\n');
        const letter = scanf('%s');

        for (let i = 0; i < randomWord.length; i++) {
            if (letter === randomWord[i]) {
                word[i] = randomWord[i] + ' ';

                console.log('\n' + `Letra certa! A palavra é: ${word.toString().replace(/,/g, "")} ` + '\n');

                hit = true;
            }
        }

        if (!hit) {
            console.log('\n' + `-> Você errou pela ${error + 1}ª vez. (Maximo de 6 erros)` + '\n');
            error++;
        }

        if (!word.find(x => x === '_ ')) {
            console.log('\n' + 'Fim de Jogo, Você ganhou!' + '\n');
        }
    }

    return resultWord;
}

function wordLength(random: string) {

    const wordSize = [];

    for (let i = 0; i < random.length; i++) {
        wordSize.push('_ ');
    }
    return wordSize;
}