// 8. Classe Macaco: Desenvolva uma classe Macaco,que possua os atributos nome e bucho (estomago) e pelo menos os métodos comer(), verBucho() e digerir(). Faça um programa ou teste interativamente, criando pelo menos dois macacos, alimentando-os com pelo menos 3 alimentos diferentes e verificando o conteúdo do estomago a cada refeição. Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?

import scanf from "scanf";

class Monkey {

    private name: string;
    private stomach!: any[];

    constructor(name?: string, stomach?: any[]) {
        this.name = name || '';
        if (!this.stomach) {
            this.stomach = [];
        }
        if (stomach) {
            this.stomach.push(...stomach);
        }
    }

    setName(name: string) {
        this.name = name;
    }

    eat(stomach: any) {
        this.stomach.push(stomach);
    }

    showStomach() {
        return this.stomach;
    }

    getName() {
        return this.name;
    }

    digest() {
        this.stomach = this.stomach.slice(1, this.stomach.length);
    }
}

const monkey1 = new Monkey();
const monkey2 = new Monkey();

console.log('Informe o nome do primeiro macaco: ');
const nameMonkey1 = scanf('%s');

console.log('Informe o nome do segundo macaco: ');
const nameMonkey2 = scanf('%s');

monkey1.setName(nameMonkey1);
monkey2.setName(nameMonkey2);

while (true) {

    console.log('\n' + `Nome do Macaco 1: ${monkey1.getName()}
Nome do Macaco 2: ${monkey2.getName()}
Estomago do macaco 1: ${monkey1.showStomach()}
Estomago do macaco 2: ${monkey2.showStomach()}

Deseja alimentar qual macaco? (Digite o numero do macaco ou 3 pra aguardar a digestao de algum macaco ou 0 para encerrar)`);
    const monkeyNumber = scanf('%d');

    if (monkeyNumber === 0) {
        break;

    }

    if (monkeyNumber === 1) {

        console.log('Quer alimenta-lo com o que?');
        const food = scanf('%S');

        monkey1.eat(food);

    } else if (monkeyNumber === 2) {

        console.log('Quer alimenta-lo com o que?');
        const food = scanf('%S');

        monkey2.eat(food);
    } else if (monkeyNumber === 3) {
        console.log('Qual macaco deseja esperar a digestao?');
        const num = scanf('%d');

        if (num === 1) {
            monkey1.digest();
        } else if (num === 2) {
            monkey2.digest();
        }
    }
}

monkey1.eat(monkey2.getName());

console.log(monkey1.showStomach());