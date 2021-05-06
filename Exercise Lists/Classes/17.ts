// 17. Crie uma Fazenda de Bichinhos instanciando vários objetos bichinho e mantendo o controle deles através de uma lista. Imite o funcionamento do programa básico, mas ao invés de exigis que o usuário tome conta de um único bichinho, exija que ele tome conta da fazenda inteira. Cada opção do menu deveria permitir que o usuário executasse uma ação para todos os bichinhos (alimentar todos os bichinhos, brincar com todos os bichinhos, ou ouvir a todos os bichinhos). Para tornar o programa mais interessante, dê para cada bichinho um nivel inicial aleatório de fome e tédio.

import scanf from "scanf";

class Tamagushi {

    private name: string;
    private hunger: number;
    private health: number;
    private age: number;

    constructor(name: string, hunger: number, health: number, age: number) {
        this.name = name;
        this.hunger = hunger;
        this.health = health;
        this.age = age;
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


const panda = new Tamagushi('Panda', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 7);
const rabbit = new Tamagushi('Coelho', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 3);
const dog = new Tamagushi('Cachorro', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 5);
const cow = new Tamagushi('Vaca', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 10);
const cat = new Tamagushi('Gato', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 2);
const chicken = new Tamagushi('Galinha', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 1);
const horse = new Tamagushi('Cavalo', randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), 6);

const farm: Tamagushi[] = [];

farm.push(panda, rabbit, dog, cow, cat, chicken, horse);


while (true) {

    console.log('\n' + 'Fazenda Atual Temos os seguintes bichos:');
    farm.forEach(x => {
        console.log(`
Bicho: ${x.getName()}
Idade: ${x.getAge()}
Fome: ${x.getHunger()}
Saude: ${x.getHealth()}
Humor: ${x.getHumor()}` + '\n');
    });

    console.log('Digite 1 para interagir com todos ao mesmo tempo ou 2 para selecionar um especifico ou 0 para encerrar:');
    const option = scanf('%d');

    if (option === 0) {
        break;
    }

    if (option === 1) {
        console.log(`O que deseja fazer?
1 - Brincar
2 - Alimentar`);
        const num = scanf('%d');

        if (num === 1) {
            console.log('\n' + 'Deseja brincar por 5, 10 ou 15 minutos com ele?');
            const minutes = scanf('%d');

            farm.forEach(x => {
                x.playTamagushi(minutes);
            });
        } else if (num === 2) {
            console.log('\n' + 'Deseja alimentar ele com sorvete, hamburguer ou arroz?');
            const feed = scanf('%s');

            farm.forEach(x => {
                x.feedTamagushi(feed);
            });
        }

    } else if (option === 2) {
        console.log('Digite o nome do bicho que deseja interagir');
        const name = scanf('%s');

        farm.forEach(x => {
            if (name === x.getName()) {
                console.log(`O que deseja fazer?
                1 - Brincar
                2 - Alimentar`);
                const num = scanf('%d');

                if (num === 1) {
                    console.log('\n' + 'Deseja brincar por 5, 10 ou 15 minutos com ele?');
                    const minutes = scanf('%d');

                    farm.forEach(y => {
                        y.playTamagushi(minutes);
                    });
                } else if (num === 2) {
                    console.log('\n' + 'Deseja alimentar ele com sorvete, hamburguer ou arroz?');
                    const feed = scanf('%s');

                    farm.forEach(y => {
                        y.feedTamagushi(feed);
                    });
                }
            }
        });
    } else if (option === 99) {
        farm.forEach(x => {
            console.log(x.getSecret());
        });
    }

    farm.forEach(x => {
        x.healthTamagushi();
        x.hungerTamagushi();
    });
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}