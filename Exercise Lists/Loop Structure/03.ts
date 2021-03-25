// 3. Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

import scanf from 'scanf';

console.log('Informe o nome: ');
let name = scanf('%s');

console.log('Informe a idade: ');
let age = scanf('%d');

console.log('Informe o salario: ');
let salary = scanf('%f');

console.log('Informe o sexo: ');
let gender = scanf('%s');

console.log('Informe o estado civil: ');
let status = scanf('%s');

while (name.length < 3) {
    console.log('Nome muito curto. Informe novamente: ');
    name = scanf('%s');
}

while (age > 150 || age < 0) {
    console.log('Idade invalida. Informe novamente: ');
    age = scanf('%d');
}

while (salary < 0) {
    console.log('Salario invalido. Informe novamente: ');
    salary = scanf('%f');
}

while (gender !== 'm' && gender !== 'f') {
    console.log('genero incorreto. Informe novamente: ');
    gender = scanf('%s');
}

while (status !== 's' && status !== 'c' && status !== 'v' && status !== 'd') {
    console.log('Estado civil incorreto. Informe novamente: ');
    status = scanf('%s');
}