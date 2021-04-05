// 10. Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.

import scanf from "scanf";

let dice1: number = 0;
let dice2: number = 0;
let result: number = 0;
let whatever: string = '';
let aux: number = 0;

while (true) {

    console.log('digite qualquer tecla para jogar os dados: ');
    whatever = scanf('%s');

    dice1 = randomDice(1, 6);
    dice2 = randomDice(1, 6);

    console.log(dice1, dice2);

    result = dice1 + dice2;

    if (result === 7 || result === 11) {

        console.log(`Você tirou ${result}, logo você é um natural e ganhou!`);
        break;

    } else if (result === 2 || result === 3 || result === 12) {

        console.log(`Você tirou ${result}, logo craps e você perdeu!`);
        break;

    } else if (result === 4 || result === 5 || result === 6 || result === 8 || result === 9 ||
        result === 10) {

        console.log(`${result} é teu ponto. Continue girando e tire ${result} novamente para ganhar`);

        aux = result;
        result = 0;

        while (true) {

            console.log('digite qualquer tecla para jogar os dados: ');
            whatever = scanf('%s');

            dice1 = randomDice(1, 6);
            dice2 = randomDice(1, 6);

            console.log(dice1, dice2);

            result = dice1 + dice2;

            if (result === 7) {
                console.log(`Tirou ${result}, você perdeu!`);
                break;
            } else if (result === aux) {
                console.log(`Tirou ${result}, você ganhou!`);
                break;
            }
        }
        break;
    }
}

function randomDice(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}