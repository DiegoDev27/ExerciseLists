// 14. Aprimore a classe do exercício anterior para adicionar o método aumentarSalario (porcentualDeAumento) que aumente o salário do funcionário em uma certa porcentagem.
// Exemplo de uso:
// harry=funcionário("Harry",25000)
// harry.aumentarSalario(10)

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

    increaseSalary(rate: number) {
        this.salary += (rate / 100) * this.salary;
    }
}

console.log('Informe o nome do funcionario: ');
const nameEmployee = scanf('%S');

console.log('Informe o salario do funcionario: ');
const salaryEmployee = scanf('%d');

const employee = new Employee(nameEmployee, salaryEmployee);

console.log('\n' + `Nome do Funcionário: ${employee.getName()}
Salário Inicial do Funcionário: R$${employee.getSalary()}`);

employee.increaseSalary(10);

console.log('\n' + `Nome do Funcionário: ${employee.getName()}
Novo salário do Funcionário com aumento: R$${employee.getSalary()}`);