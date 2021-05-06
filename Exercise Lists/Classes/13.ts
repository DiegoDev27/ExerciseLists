// 13. Classe Funcionário: Implemente a classe Funcionário. Um empregado tem um nome (um string) e um salário(um double). Escreva um construtor com dois parâmetros (nome e salário) e métodos para devolver nome e salário. Escreva um pequeno programa que teste sua classe.

import scanf from "scanf";

class Employee {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }
}

console.log('Informe o nome do funcionario: ');
const nameEmployee = scanf('%S');

console.log('Informe o salario do funcionario: ');
const salaryEmployee = scanf('%d');

const employee = new Employee(nameEmployee, salaryEmployee);

console.log('\n' + `Nome do Funcionário: ${employee.getName()}
Salário do Funcionário: R$${employee.getSalary()}`);