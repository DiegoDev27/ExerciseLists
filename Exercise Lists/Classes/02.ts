// 2. Classe Quadrado: Crie uma classe que modele um quadrado:

// Atributos: Tamanho do lado
// Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;

import scanf from "scanf";

class Square {

    private sideSize: number;

    constructor(sideSize?: number) {
        this.sideSize = sideSize || 0;
    }

    setSideSize(sideSize: number) {
        this.sideSize = sideSize;
    }

    getSideSize() {
        return this.sideSize;
    }

    CalculateArea() {
        return this.sideSize * this.sideSize;
    }
}

const square = new Square();

let ans = 'sim';

while (ans === 'sim') {

    console.log('Informe o lado do quadrado em CM: ');
    const sideSquare = scanf('%d');

    square.setSideSize(sideSquare);

    console.log(`Lado do quadrado: ${square.getSideSize()}cm
Calculo da area do quadrado: ${square.CalculateArea()}cm` + '\n');


    console.log('Deseja continuar? Digite sim para continaur e nao para encerrar:');
    ans = scanf('%s');

    if (ans === 'nao') {
        break;
    }
}