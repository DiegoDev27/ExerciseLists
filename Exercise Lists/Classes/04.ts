// 4. Classe Pessoa: Crie uma classe que modele uma pessoa:

// Atributos: nome, idade, peso e altura
// Métodos: Envelhercer, engordar, emagrecer, crescer. Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.

import scanf from "scanf";

class Person {

    private name: string;
    private age: number;
    private weight: number;
    private height: number;

    constructor(name?: string, age?: number, weight?: number, height?: number) {
        this.name = name || '';
        this.age = age || 0;
        this.weight = weight || 0;
        this.height = height || 0;
    }

    olden(age: number) {

        if (this.age < 21) {
            this.height += 0.5;
        }
        this.age += 1;
    }

    fatten(weight: number) {
        this.weight += weight;
    }

    loseWeight(weight: number) {
        this.weight -= weight;
    }

    growUp(height: number) {
        this.height += height;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    getHeight() {
        return this.height;
    }
}

console.log('Insira seu nome: ');
const namePerson = scanf('%S');

console.log('Insira sua idade: ');
const agePerson = scanf('%d');

console.log('Insira seu peso: ');
const weightPerson = scanf('%f');

console.log('Insira suas alturas em CM: ');
const heightPerson = scanf('%d');

const person = new Person(namePerson, agePerson, weightPerson, heightPerson);

while (true) {

    console.log('\n' + `Nome: ${person.getName()}
    Idade: ${person.getAge()}
    Peso: ${person.getWeight()}
    Altura: ${person.getHeight()}` + '\n');

    console.log('\n' + `O que deseja fazer?
    Digite 1 para adicionar mais 1 ano
    Digite 2 para adicionar mais peso
    Digite 3 para diminuir peso
    Digite 4 para aumentar altura
    Digite 5 para encerrar`);
    const answer = scanf('%d');

    if (answer === 5) {
        break;
    } else if (answer === 1) {
        person.olden(1);
    } else if (answer === 2) {
        console.log('Informe o peso que ganhou: ');
        const value = scanf('%f');

        person.fatten(value);
    } else if (answer === 3) {
        console.log('Informe o peso que perdeu:');
        const value = scanf('%f');

        person.loseWeight(value);
    } else if (answer === 4) {
        console.log('Informe a altura que ganhou: ');
        const value = scanf('%f');

        person.growUp(value);
    }
}