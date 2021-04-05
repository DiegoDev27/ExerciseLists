// 7. Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.

import scanf from "scanf";

let installmentValue: number = -1;
let lateDays: number = 0;
let valuePay: number = 0;
let amountInstallment: number = 0;
let totalValue: number = 0;

while (true) {
    console.log('Informe o valor da prestação: ');
    installmentValue = scanf('%d');

    if (installmentValue === 0) {
        break;
    }

    console.log('Informe os dias atrasados: ');
    lateDays = scanf('%d');

    valuePay = paymentValue(installmentValue, lateDays);

    console.log('Valor total a pagar:' + valuePay);

    totalValue += valuePay;
    amountInstallment++;
}

console.log('Quantidade de prestações pagas: ' + amountInstallment + ' Valor total pago: ' + totalValue);

function paymentValue(value: number, delay: number): number {
    if (lateDays > 0) {
        value += (value * 0.03) + (value * 0.001);
    }

    return value;
}