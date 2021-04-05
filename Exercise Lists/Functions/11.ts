// 11. Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.

import scanf from "scanf";

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let completeDate: string;
let dateFull: string;

console.log('Informe a data');
completeDate = scanf('%s');

dateFull = monthFull(completeDate, months);

console.log(dateFull);


function monthFull(date: string, monthDate: string[]): string {

    const day: string = date.slice(0, 2);
    const month: string = date.slice(3, 5);
    const year: string = date.slice(6, 10);

    const dayInteger = Number.parseInt(day, 10);
    const yearInteger = Number.parseInt(year, 10);

    const monthInteger: number = Number.parseInt(month, 10);
    const monthInFull: string = monthDate[monthInteger - 1];

    while (true) {
        if (monthInFull === 'Fevereiro' && dayInteger > 28 && yearInteger % 4 !== 0) {
            return 'Fevereiro tem 28 dias em ano não bissextos!';
        } else if (monthInFull === 'Fevereiro' && dayInteger > 30) {
            return 'Fevereiro só tem 29 ou 28 dias!';
        } else {
            return day + ' de ' + monthInFull + ' de ' + year;
        }
    }
}