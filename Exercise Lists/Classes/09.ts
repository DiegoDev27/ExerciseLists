// 9. Classe Ponto e Retangulo: Faça um programa completo utilizando funções e classes que:

// Possua uma classe chamada Ponto, com os atributos x e y.
// Possua uma classe chamada Retangulo, com os atributos largura e altura.
// Possua uma função para imprimir os valores da classe Ponto
// Possua uma função para encontrar o centro de um Retângulo.
// Você deve criar alguns objetos da classe Retangulo.
// Cada objeto deve ter um vértice de partida, por exemplo, o vértice inferior esquerdo do retângulo, que deve ser um objeto da classe Ponto.
// A função para encontrar o centro do retângulo deve retornar o valor para um objeto do tipo ponto que indique os valores de x e y para o centro do objeto.
// O valor do centro do objeto deve ser mostrado na tela
// Crie um menu para alterar os valores do retângulo e imprimir o centro deste retângulo.

import scanf from "scanf";

class Point {

    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

class Rectangle {

    private width: number;
    private height: number;
    private vertexBottomLeft: Point;


    constructor(width: number, height: number, vertexBottomLeft: Point) {
        this.vertexBottomLeft = vertexBottomLeft;
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(heigth: number) {
        this.height = heigth;
    }

    findCenter(): Point {

        const centerPoint = new Point(this.width / 2 + this.vertexBottomLeft.getX(), this.height / 2 + this.vertexBottomLeft.getY());

        return centerPoint;
    }
}



console.log('Digite a largura do Retangulo: ');
let rectWidth = scanf('%d');

console.log('Digite a altura do Retangulo: ');
let rectHeight = scanf('%d');

console.log('Digite o X do ponto de partida inferior esquerdo: ');
const pointXBottomLeft = scanf('%d');

console.log('Digite o Y do ponto de partida inferior esquerdo: ');
const pointYBottomLeft = scanf('%d');

const point = new Point(pointXBottomLeft, pointYBottomLeft);

const rectangle = new Rectangle(rectWidth, rectHeight, point);

console.log(`Valor do centro do retangulo: (${rectangle.findCenter().getX()},${rectangle.findCenter().getY()})`);

while (true) {
    console.log(`Deseja alterar a largura e altura do retangulo? Digite 1 para alterar ou 0 para encerrar`);
    const option = scanf('%d');

    if (option === 1) {
        console.log('Digite a largura do Retangulo: ');
        rectWidth = scanf('%d');

        console.log('Digite a altura do Retangulo: ');
        rectHeight = scanf('%d');

        rectangle.setWidth(rectWidth);
        rectangle.setHeight(rectHeight);

        console.log(`Valor do centro do retangulo: (${rectangle.findCenter().getX()},${rectangle.findCenter().getY()})`);
    } else if (option === 0) {
        break;
    }
}