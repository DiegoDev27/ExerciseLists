// 6. Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.

import scanf from "scanf";

let hours: number = -2;
let minutes: number = -2;
const timeAmPm: string = '';
let convertedHour: number = 0;

while (true) {

    console.log('Informe a hora: ');
    hours = scanf('%d');

    if (hours === -1) {
        break;
    }

    console.log('Informe o minuto: ');
    minutes = scanf('%d');

    convertHour(hours, timeAmPm);

    printHour(convertedHour, minutes, timeAmPm);
}

function convertHour(hour: number, time: string): void {
    if (hour > 12) {
        convertedHour = hour - 12;
        time = 'P.M.';
    } else {
        convertedHour = hour;
        time = 'A.M.';
    }

    if (hour === 0) {
        convertedHour = 12;
        time = 'A.M.';
    } else if (hour === 12) {
        convertedHour = 12;
        time = 'P.M.';
    }
}

function printHour(converted: number, minute: number, time: string): void {

    console.log(`${converted}:${minute} ${time}`);
}