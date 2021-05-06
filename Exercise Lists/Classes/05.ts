// 5. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes: alterarNome, depósito e saque; No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios.

import scanf from "scanf";

class CheckingAccount {

    private accountNumber: number;
    private name: string;
    private balance: number;

    constructor(accountNumber: number, name: string, balance?: number) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance || 0;
    }

    changeName(name: string) {
        this.name = name;
    }

    deposit(balance: number) {
        this.balance += balance;
    }

    withdraw(balance: number) {
        this.balance -= balance;
    }

    getName() {
        return this.name;
    }

    getDeposit() {
        return this.deposit;
    }

    getWithdraw() {
        return this.withdraw;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    getBalance() {
        return this.balance;
    }
}


console.log('Informe o nome: ');
const nameAccount = scanf('%S');

console.log('Informe o numero da conta sem traço: ');
const accountNum = scanf('%d');

console.log('Deseja fazer um deposito inicial? digite sim para inserir o valor ou nao para continuar');
const answer = scanf('%S');

let checkingAccount = new CheckingAccount(0, '');

if (answer === 'nao') {
    checkingAccount = new CheckingAccount(accountNum, nameAccount, 0);
} else {
    console.log('Insira o valor desejado do deposito: ');
    const value = scanf('%f');
    checkingAccount = new CheckingAccount(accountNum, nameAccount, value);
}


while (true) {

    console.log('\n' + `Nome da Conta: ${checkingAccount.getName()}
Numero da Conta: ${checkingAccount.getAccountNumber()}
Saldo da Conta: R$${checkingAccount.getBalance()}`);

    console.log('\n' + `O que deseja fazer?
    Digite 1 para Saque
    Digite 2 para Deposito
    Digite 3 para mudar o nome da conta
    Digite 4 para encerrar:`);
    const ans = scanf('%d');

    if (ans === 4) {

        console.log(`Nome da Conta: ${checkingAccount.getName()}
Numero da Conta: ${checkingAccount.getAccountNumber()}
Saldo da Conta: ${checkingAccount.getBalance()}`);
        break;

    } else if (ans === 1) {

        console.log('Digite o valor de saque: ');
        const value = scanf('%f');

        checkingAccount.withdraw(value);

    } else if (ans === 2) {

        console.log('Digite o valor de deposito: ');
        const value = scanf('%f');

        checkingAccount.deposit(value);

    } else if (ans === 3) {

        console.log('Informe o novo nome de usuario da conta: ');
        const newName = scanf('%S');

        checkingAccount.changeName(newName);
    }
}