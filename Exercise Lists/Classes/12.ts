// 12. Classe Conta de Investimento: Faça uma classe contaInvestimento que seja semelhante a classe contaBancaria, com a diferença de que se adicione um atributo taxaJuros. Forneça um construtor que configure tanto o saldo inicial como a taxa de juros. Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta. Escreva um programa que construa uma poupança com um saldo inicial de R$1000,00 e uma taxa de juros de 10%. Depois aplique o método adicioneJuros() cinco vezes e imprime o saldo resultante.

import scanf from "scanf";

class InvestmentAccount {
    private accountNumber: number;
    private name: string;
    private openingBalance: number;
    private interestRate: number;
    private balance: number;

    constructor(accountNumber: number, name: string, openingBalance: number, interestRate: number, balance: number) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.openingBalance = openingBalance;
        this.interestRate = interestRate;
        this.balance = balance;
    }

    addInterest() {
        this.balance += (this.interestRate / 100) * this.balance;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    getName() {
        return this.name;
    }

    getOpeningBalance() {
        return this.openingBalance;
    }

    getInterestRate() {
        return this.interestRate;
    }

    getBalance() {
        return this.balance;
    }
}

console.log('Informe o numero da conta sem traço:');
const numAccount = scanf('%d');

console.log('Informe o nome completo do titular da conta: ');
const nameAccount = scanf('%S');

console.log('Informe o Saldo Inicial da conta: ');
const opBalance = scanf('%d');

console.log('Informe a Taxa de Juros:');
const interest = scanf('%d');


const investmentAccount = new InvestmentAccount(numAccount, nameAccount, opBalance, interest, opBalance);

console.log('\n' + `Numero da Conta: ${investmentAccount.getName()}
Nome do Titular: ${investmentAccount.getAccountNumber()}
Saldo Inicial: R$${investmentAccount.getOpeningBalance()},00
Taxa de Juros: ${investmentAccount.getInterestRate()}%
Saldo Atual: R$${investmentAccount.getBalance()}`);

for (let i = 0; i < 5; i++) {
    investmentAccount.addInterest();
}

console.log('\n' + `Numero da Conta: ${investmentAccount.getName()}
Nome do Titular: ${investmentAccount.getAccountNumber()}
Saldo Inicial: R$${investmentAccount.getOpeningBalance()},00
Taxa de Juros: ${investmentAccount.getInterestRate()}%
Saldo Atual: R$${investmentAccount.getBalance()}`);