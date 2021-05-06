// 7. Classe Bichinho Virtual:Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):

// Atributos: Nome, Fome, Saúde e Idade.
// Métodos: Alterar Nome, Fome, Saúde e Idade; Retornar Nome, Fome, Saúde e Idade.
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer momento.

import scanf from "scanf";

class Tamagushi {

    private name: string;
    private hunger: number;
    private health: number;
    private age: number;

    constructor(name?: string, hunger?: number, health?: number, age?: number) {
        this.name = name || '';
        this.hunger = hunger || 100;
        this.health = health || 100;
        this.age = age || 0;
    }

    changeName(name: string) {
        this.name = name;
    }

    hungerTamagushi(hunger: number) {
        this.hunger = hunger;
    }

    healthTamagushi(health: number) {
        this.health = health;
    }

    ageTamagushi(age: number) {
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getHunger() {
        return this.hunger;
    }

    getHealth() {
        return this.health;
    }

    getAge() {
        return this.age;
    }

    getHumor() {

        if (this.health >= 70 && this.hunger <= 70) {
            return 'Im Happy!';
        }

        if (this.health >= 50 && this.hunger <= 50) {
            return 'Im not so good!';
        }

        if (this.health >= 30 && this.hunger <= 30) {
            return 'Im very angry!';
        }

        return 'Im so weak that I cant even answer!';
    }
}

const tamagushi = new Tamagushi();

console.log('Informe o nome do Tamagushi: ');
const tamagushiName = scanf('%S');

console.log('Informe a idade do Tamagushi: ');
const tamagushiAge = scanf('%d');

tamagushi.changeName(tamagushiName);
tamagushi.ageTamagushi(tamagushiAge);

tamagushi.healthTamagushi(77);
tamagushi.hungerTamagushi(29);

console.log(`Nome: ${tamagushi.getName()}
Idade: ${tamagushi.getAge()}
Saude: ${tamagushi.getHealth()}
Fome: ${tamagushi.getHunger()}
Humor: ${tamagushi.getHumor()}`);