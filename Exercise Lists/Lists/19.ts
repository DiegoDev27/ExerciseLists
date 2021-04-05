// 19. Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande quantidade de organizações:
// "Qual o melhor Sistema Operacional para uso em servidores?"

// As possíveis respostas são:

// 1- Windows Server
// 2- Unix
// 3- Linux
// 4- Netware
// 5- Mac OS
// 6- Outro
// Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). Os valores referentes a cada uma das opções devem ser armazenados num vetor. Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada um dos concorrentes e informar o vencedor da enquete. O formato da saída foi dado pela empresa, e é o seguinte:

// Sistema Operacional     Votos   %
// -------------------     -----   ---
// Windows Server           1500   17%
// Unix                     3500   40%
// Linux                    3000   34%
// Netware                   500    5%
// Mac OS                    150    2%
// Outro                     150    2%
// -------------------     -----
// Total                    8800

// O Sistema Operacional mais votado foi o Unix, com 3500 votos, correspondendo a 40 % dos votos.

import scanf from "scanf";

const systems = [];
const names = ['Windows Server', 'Unix', 'Linux', 'Netware', 'Mac Os', 'Outro'];
let value = -1;
let totalVotes = 0;
const amount = 6;
let mostVoted = {
    name: '',
    votes: 0,
    percent: 0
};

for (let i = 0; i <= amount; i++) {
    systems.push({
        name: names[i],
        votes: 0,
        percent: 0,
    });
}

while (true) {

    console.log(`1 - Windows Server, 2 - Unix, 3 - Linux, 4 - Netware, 5 - MacOs, 6 - Outro
Em qual sistema você vota ? (0 para encerrar) `);
    value = scanf('%d');
    console.clear();

    if (value === 0) {
        break;
    }

    if (value > 6 || value < 0) {
        console.log(`${value} não é um voto valido, por favor digite de 1 á 6 ou 0 para encerrar.`);
        continue;
    }

    totalVotes++;

    for (let j = 0; j < systems.length; j++) {
        if (value === j + 1) {
            systems[j].votes++;
        }
        systems[j].percent = (calculatePercent(systems[j].votes, totalVotes));
    }

    for (let x = 0; x < systems.length; x++) {
        if (systems[x].votes > mostVoted.votes) {
            mostVoted = systems[x];
        }
    }
}

function calculatePercent(amountVotes: number, total: number): number {
    return Math.floor((amountVotes / total) * 100);
}
console.log(mostVoted);
console.log(`
Sistema Operacional     Votos   %
-------------------     -----   ---
Windows Server          ${systems[0].votes}       ${systems[0].percent}
Unix                    ${systems[1].votes}       ${systems[1].percent}
Linux                   ${systems[2].votes}       ${systems[2].percent}
Netware                 ${systems[3].votes}       ${systems[3].percent}
Mac OS                  ${systems[4].votes}       ${systems[4].percent}
Outro                   ${systems[5].votes}       ${systems[5].percent}
-------------------     -----
Total                   ${totalVotes}

O sistema operacional mais votado foi o ${mostVoted.name}, com ${mostVoted.votes} votos, correspondendo a ${mostVoted.percent}% dos votos.`);