// 22. Sua organização acaba de contratar um estagiário para trabalhar no Suporte de Informática, com a intenção de fazer um levantamento nas sucatas encontradas nesta área. A primeira tarefa dele é testar todos os cerca de 200 mouses que se encontram lá, testando e anotando o estado de cada um deles, para verificar o que se pode aproveitar deles.
// Foi requisitado que você desenvolva um programa para registrar este levantamento. O programa deverá receber um número indeterminado de entradas, cada uma contendo: um número de identificação do mouse o tipo de defeito:
// necessita da esfera;
// necessita de limpeza; a.necessita troca do cabo ou conector; a.quebrado ou inutilizado Uma identificação igual a zero encerra o programa. Ao final o programa deverá emitir o seguinte relatório:

// Quantidade de mouses: 100

// Situação                        Quantidade              Percentual
// 1- necessita da esfera                  40                     40%
// 2- necessita de limpeza                 30                     30%
// 3- necessita troca do cabo ou conector  15                     15%
// 4- quebrado ou inutilizado              15                     15%

import scanf from "scanf";

const defect = [0, 0, 0, 0];
const percent = [0, 0, 0, 0];
let value = -1;
let totalDefect = 0;
let identification = 0;


while (true) {

    console.log('Informe a identificação do mouse: ');
    identification = scanf('%d');

    if (identification === 0) {
        break;
    }

    console.log(`Informe o defeito:
    1 - Necessita da Esfera
    2 - Necessita de Limpeza
    3 - Necessita de troca do cabo ou conector
    4 - Quebrado ou inutilizado:`);
    value = scanf('%d');
    console.clear();

    totalDefect++;

    for (let i = 0; i < defect.length; i++) {

        if (value === i + 1) {
            defect[i]++;
        }

        percent[i] = defectPercent(defect[i], totalDefect);

    }
}

function defectPercent(amount: number, total: number) {
    return amount / total * 100;
}

console.log(defect);

console.log(`
Quantidade de mouses: ${totalDefect}

Situação                                Quantidade            Percentual
1- necessita da esfera                  ${defect[0]}                     ${percent[0]}
2- necessita de limpeza                 ${defect[1]}                     ${percent[1]}
3- necessita troca do cabo ou conector  ${defect[2]}                     ${percent[2]}
4- quebrado ou inutilizado              ${defect[3]}                     ${percent[3]}`);