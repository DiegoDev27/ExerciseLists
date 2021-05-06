// 3. Classe Retangulo: Crie uma classe que modele um retangulo:

// Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
// Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidas de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.

import scanf from "scanf";

class Rectangle {

    private base: number;
    private height: number;

    constructor(base?: number, height?: number) {
        this.base = base || 0;
        this.height = height || 0;
    }

    setSideBase(base: number) {
        this.base = base;
    }

    setSideHeight(height: number) {
        this.height = height;
    }

    getSideBase() {
        return this.base;
    }

    getSideHeight() {
        return this.height;
    }

    calculateArea() {
        return this.base * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.base + this.height);
    }
}

const rectangle = new Rectangle();
const tread = new Rectangle();


console.log('Informe a base do retangulo em CM: ');
const baseRectangle = scanf('%f');

console.log('Informe a altura do retangulo em CM: ');
const heightRectangle = scanf('%f');

rectangle.setSideBase(baseRectangle);
rectangle.setSideHeight(heightRectangle);



console.log('Informe a base do piso');
const baseTread = scanf('%f');

console.log('Informe a altura do piso');
const heightTread = scanf('%f');

tread.setSideBase(baseTread);
tread.setSideHeight(heightTread);


const amountTread = rectangle.calculateArea() / tread.calculateArea();
const amountBaseboard = rectangle.calculatePerimeter() / tread.getSideBase();


console.log(`Tamanho da base: ${rectangle.getSideBase()}cm
Tamanho da altura: ${rectangle.getSideHeight()}cm
Tamanho da area: ${rectangle.calculateArea()}cm
Tamanho do perimetro: ${rectangle.calculatePerimeter()}cm
Quantidade de pisos necessários nessa area: ${amountTread} Pisos
Quantidade de rodapés necessarios nessa area: ${amountBaseboard} Rodapés `);