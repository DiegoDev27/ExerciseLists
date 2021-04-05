// 20. As Organizações Tabajara resolveram dar um abono aos seus colaboradores em reconhecimento ao bom resultado alcançado durante o ano que passou. Para isto contratou você para desenvolver a aplicação que servirá como uma projeção de quanto será gasto com o pagamento deste abono.
// Após reuniões envolvendo a diretoria executiva, a diretoria financeira e os representantes do sindicato laboral, chegou - se a seguinte forma de cálculo:

// Cada funcionário receberá o equivalente a 20 % do seu salário bruto de dezembro; a.O piso do abono será de 100 reais, isto é, aqueles funcionários cujo salário for muito baixo, recebem este valor mínimo; Neste momento, não se deve ter nenhuma preocupação com colaboradores com tempo menor de casa, descontos, impostos ou outras particularidades.Seu programa deverá permitir a digitação do salário de um número indefinido(desconhecido) de salários.Um valor de salário igual a 0(zero) encerra a digitação.Após a entrada de todos os dados o programa deverá calcular o valor do abono concedido a cada colaborador, de acordo com a regra definida acima.Ao final, o programa deverá apresentar:

// O salário de cada funcionário, juntamente com o valor do abono;
// O número total de funcionário processados;
// O valor total a ser gasto com o pagamento do abono;
// O número de funcionário que receberá o valor mínimo de 100 reais;
// O maior valor pago como abono; A tela abaixo é um exemplo de execução do programa, apenas para fins ilustrativos. Os valores podem mudar a cada execução do programa.

// Projeção de Gastos com Abono
// ============================

// Salário: 1000
// Salário: 300
// Salário: 500
// Salário: 100
// Salário: 4500
// Salário: 0

// Salário    - Abono
// R$ 1000.00 - R$  200.00
// R$  300.00 - R$  100.00
// R$  500.00 - R$  100.00
// R$  100.00 - R$  100.00
// R$ 4500.00 - R$  900.00

// Foram processados 5 colaboradores
// Total gasto com abonos: R$ 1400.00
// Valor mínimo pago a 3 colaboradores
// Maior valor de abono pago: R$ 900.00


import scanf from "scanf";

const salary = [];
let payment = 0;
let totalEmployees = 0;
let totalAllowance = 0;
let totalMinimum = 0;
let biggestAllowance = 0;
let increase = 0;

while (true) {
    console.log('Digite o salário:');
    payment = scanf('%d');

    if (payment === 0) {
        break;
    }

    if (payment <= 500) {
        increase = 100;
        totalMinimum++;

    } else {
        increase = salaryAllowance(payment);
    }

    salary.push({ salary: payment, allowance: increase });

    if (increase > totalAllowance) {
        biggestAllowance = increase;
    }

    totalEmployees++;

    totalAllowance += increase;
}

function salaryAllowance(value: number): number {
    return value * 0.2;
}

console.log(`
Projoção dos gastos como Abono
==============================
`);

for (let i = 0; i < salary.length; i++) {

    console.log(`Salário: ${salary[i].salary}`);
}

console.log(`
Salário     -       Abono`);
for (let j = 0; j < salary.length; j++) {
    console.log(`
    R$${salary[j].salary}    -   R$${salary[j].allowance}`);
}

console.log(`Foram processados ${totalEmployees} colaboradores.
Total de gasto com abonos: R$${totalAllowance}
Valor minimo pago a ${totalMinimum} colaboradores
Maior valor de abono pago: R$${biggestAllowance}`);