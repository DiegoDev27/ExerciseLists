// 18. Uma grande emissora de televisão quer fazer uma enquete entre os seus telespectadores para saber qual o melhor jogador após cada jogo. Para isto, faz-se necessário o desenvolvimento de um programa, que será utilizado pelas telefonistas, para a computação dos votos. Sua equipe foi contratada para desenvolver este programa, utilizando a linguagem de programação C++. Para computar cada voto, a telefonista digitará um número, entre 1 e 23, correspondente ao número da camisa do jogador. Um número de jogador igual zero, indica que a votação foi encerrada. Se um número inválido for digitado, o programa deve ignorá-lo, mostrando uma breve mensagem de aviso, e voltando a pedir outro número. Após o final da votação, o programa deverá exibir:
// O total de votos computados;
// Os númeos e respectivos votos de todos os jogadores que receberam votos;
// O percentual de votos de cada um destes jogadores;
// O número do jogador escolhido como o melhor jogador da partida, juntamente com o número de votos e o percentual de votos dados a ele.
// Observe que os votos inválidos e o zero final não devem ser computados como votos. O resultado aparece ordenado pelo número do jogador. O programa deve fazer uso de arrays. O programa deverá executar o cálculo do percentual de cada jogador através de uma função. Esta função receberá dois parâmetros: o número de votos de um jogador e o total de votos. A função calculará o percentual e retornará o valor calculado. Abaixo segue uma tela de exemplo. O disposição das informações deve ser o mais próxima possível ao exemplo. Os dados são fictícios e podem mudar a cada execução do programa. Ao final, o programa deve ainda gravar os dados referentes ao resultado da votação em um arquivo texto no disco, obedecendo a mesma disposição apresentada na tela.
// Enquete: Quem foi o melhor jogador?

// Número do jogador (0=fim): 9
// Número do jogador (0=fim): 10
// Número do jogador (0=fim): 9
// Número do jogador (0=fim): 10
// Número do jogador (0=fim): 11
// Número do jogador (0=fim): 10
// Número do jogador (0=fim): 50
// Informe um valor entre 1 e 23 ou 0 para sair!
// Número do jogador (0=fim): 9
// Número do jogador (0=fim): 9
// Número do jogador (0=fim): 0

// Resultado da votação:

// Foram computados 8 votos.

// Jogador Votos %
// 9               4               50, 0 %
// 10              3               37, 5 %
// 11              1               12, 5 %
// O melhor jogador foi o número 9, com 4 votos, correspondendo a 50 % do total de votos.


import scanf from "scanf";
import * as fs from "fs";

const amount = 23;
let players = [];
let totalVotes = 0;
let num = -1;
const result = [];

for (let i = 1; i <= amount; i++) {
    players.push({
        shirt: i,
        votes: 0,
        percent: 0
    });
}

while (true) {
    console.log('Numero do jogador: (0 para encerrar)');
    num = scanf('%d');
    console.clear();

    if (num === 0) {
        break;
    }

    if (num > 23 || num < 0) {
        console.log(`${num} não é um numero valido, digite de 1 a 23 para votar ou 0 para sair: `);
        continue;
    }
    totalVotes++;
    for (let j = 0; j < players.length; j++) {
        if (num === j + 1) {
            players[j].votes++;
        }
        players[j].percent = votesPercent(players[j].votes, totalVotes);
    }
}

players = players.sort((x, z) => {
    return z.votes - x.votes;
});

function votesPercent(amountVotes: number, total: number): number {
    return (amountVotes / total) * 100;
}

function saveFile(name: string, date: any) {
    fs.writeFile(name, date, (err) => {
        if (err) throw err;
        console.log('O arquivo do resultado foi criado com sucesso!');
    });
}

let y = 0;

result[y] = `Resultado da votação:

Foram computados: ${totalVotes} votos.\n`;

console.log(`Resultado da votação:
Foram computados ${totalVotes} votos.

Jogador       Votos       %`);
for (y = 0; y <= players.length - 1; y++) {
    if (players[y].votes > 0) {
        console.log(`${players[y].shirt}              ${players[y].votes}          ${players[y].percent}`);

        result[1] =

            `Jogador                        Votos                           %

${players[y].shirt}                              ${players[y].votes}                               ${players[y].percent}\n`;
    }
}

result[y + 1] = `\n O melhor jogador foi o numero ${players[0].shirt}, com ${players[0].votes} votos, correspondendo a ${players[0].percent}% do total de votos.`;

console.log(`O melhor jogador foi o numero ${players[0].shirt}, com ${players[0].votes} votos, correspondendo a ${players[0].percent}% do total de votos.`);

saveFile('result.txt', result);