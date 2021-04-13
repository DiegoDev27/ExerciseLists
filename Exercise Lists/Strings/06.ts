// 6. Data por extenso. Faça um programa que solicite a data de nascimento (dd/mm/aaaa) do usuário e imprima a data com o nome do mês por extenso.

// Data de Nascimento: 29/10/1973
// Você nasceu em  29 de Outubro de 1973.

import scanf from "scanf";

console.log('Informe a data de nascimento: ');
const date = scanf('%S');

const monthInFull = printMonthInFull(date);

console.log(monthInFull);


function printMonthInFull(dateString: string): string {

    const monthInteger = parseInt(dateString.slice(3, 5), 10);

    console.log(monthInteger);

    const day = dateString.slice(0, 2);

    const year = dateString.slice(6, 11);

    let monthFull = '';

    switch (monthInteger) {

        case 1:
            monthFull = 'Janeiro';
            break;

        case 2:
            monthFull = 'Fevereiro';
            break;

        case 3:
            monthFull = 'Março';
            break;

        case 4:
            monthFull = 'Abril';
            break;

        case 5:
            monthFull = 'Maio';
            break;

        case 6:
            monthFull = 'Junho';
            break;

        case 7:
            monthFull = 'Julho';
            break;

        case 8:
            monthFull = 'Agosto';
            break;

        case 9:
            monthFull = 'Setembro';
            break;

        case 10:
            monthFull = 'Outubro';
            break;

        case 11:
            monthFull = 'Novembro';
            break;

        case 12:
            monthFull = 'Dezembro';
            break;

        default:
            break;
    }

    const result = day + ' de ' + monthFull + ' de ' + year;

    return result;
}

