// 1. Faça um programa que leia um arquivo texto contendo uma lista de endereços IP e gere um outro arquivo, contendo um relatório dos endereços IP válidos e inválidos.
// O arquivo de entrada possui o seguinte formato:
// 200.135.80.9
// 192.168.1.1
// 8.35.67.74
// 257.32.4.5
// 85.345.1.2
// 1.2.3.4
// 9.8.234.5
// 192.168.0.256

// O arquivo de saída possui o seguinte formato:
// [Endereços válidos:]
// 200.135.80.9
// 192.168.1.1
// 8.35.67.74
// 1.2.3.4

// [Endereços inválidos: ]
// 257.32.4.5
// 85.345.1.2
// 9.8.234.5
// 192.168.0.256

import * as fs from "fs";

const txt = fs.readFileSync('ips.txt');
const ipString = txt.toString();
const ips = ipString.split('\n');

let ipsValid = 'Endereços Validos:';
let ipsInvalid = 'Endereços Invalidos';
let fileResult;

for (let i = 0; i < ips.length; i++) {
    fileResult = validIps(ips[i]);

    if (fileResult) {
        ipsValid += '\n' + ips[i];
    } else {
        ipsInvalid += '\n' + ips[i];
    }
}

saveFile('ipsResult.txt', ipsValid + '\n\n' + ipsInvalid);


function saveFile(name: string, date: any) {
    fs.writeFile(name, date, (err) => {
        if (err) throw err;
        console.log('O arquivo do resultado foi criado com sucesso!');
    });
}


function validIps(ip: string) {

    const vec = ip.split('.').map(x => parseInt(x, 10));

    if (vec.length !== 4) {
        return false;
    }

    for (let j = 0; j < vec.length; j++) {
        if (vec[j] >= 2 ** 8) {
            return false;
        }
    }

    return true;
}