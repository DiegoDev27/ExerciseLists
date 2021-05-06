// 16. Crie uma "porta escondida" no programa do programa do bichinho virtual que mostre os valores exatos dos atributos do objeto. Consiga isto mostrando o objeto quando uma opção secreta, não listada no menu, for informada na escolha do usuário. Dica: acrescente um método especial str() à classe Bichinho.

import scanf from "scanf";

class Tamagushi {

    private name: string;
    private hunger: number;
    private health: number;
    private age: number;

    constructor(name?: string, hunger?: number, health?: number, age?: number) {
        this.name = name || '';
        this.hunger = hunger || 50;
        this.health = health || 50;
        this.age = age || 0;
    }

    changeName(name: string) {
        this.name = name;
    }

    hungerTamagushi() {
        this.hunger += 3;
    }

    healthTamagushi() {
        this.health -= 3;
    }

    ageTamagushi(age: number) {
        this.age = age;
    }

    feedTamagushi(feed: string) {
        if (feed === 'sorvete') {
            this.hunger -= 5;
            this.health += 5;
        } else if (feed === 'hamburguer') {
            this.hunger -= 10;
            this.health += 10;
        } else if (feed === 'arroz') {
            this.hunger -= 15;
            this.health += 15;
        }
    }

    playTamagushi(play: number) {
        if (play === 5) {
            this.health += 5;
            this.hunger += 5;
        } else if (play === 10) {
            this.health += 10;
            this.hunger += 10;
        } else if (play === 15) {
            this.health += 15;
            this.hunger += 15;
        }
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

    getSecret() {
        return 'nome:' + this.name + ', ' + 'idade:' + this.age + ', ' + 'saude:' + this.health + ', ' + 'fome:' + this.hunger;
    }
}

const tamagushi = new Tamagushi();

console.log('Informe o nome do Tamagushi: ');
const tamagushiName = scanf('%S');

console.log('Informe a idade do Tamagushi: ');
const tamagushiAge = scanf('%d');

tamagushi.changeName(tamagushiName);
tamagushi.ageTamagushi(tamagushiAge);

while (true) {

    console.log('\n' + `Nome: ${tamagushi.getName()}
Idade: ${tamagushi.getAge()}
Saude: ${tamagushi.getHealth()}
Fome: ${tamagushi.getHunger()}
Humor: ${tamagushi.getHumor()}` + '\n');

    console.log(`Digite o que deseja fazer com o Tamagushi
1 - Brincar
2 - Alimentar
0 - Encerrar`);
    const option = scanf('%d');

    if (option === 0) {
        break;
    }

    if (option === 1) {
        console.log('\n' + 'Deseja brincar por 5, 10 ou 15 minutos com ele?');
        const minutes = scanf('%d');

        tamagushi.playTamagushi(minutes);

    } else if (option === 2) {
        console.log('\n' + 'Deseja alimentar ele com sorvete, hamburguer ou arroz?');
        const feed = scanf('%s');

        tamagushi.feedTamagushi(feed);
    } else if (option === 99) {
        console.log(`${tamagushi.getSecret()}`);
    }

    tamagushi.healthTamagushi();
    tamagushi.hungerTamagushi();
}