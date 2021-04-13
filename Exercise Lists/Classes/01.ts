// 1. Classe Bola: Crie uma classe que modele uma bola:

// Atributos: Cor, circunferência, material
// Métodos: trocaCor e mostraCor

import scanf from "scanf";

class Ball {

    color: string;
    circumference: number;
    material: string;


    constructor(color?: string, circumference?: number, material?: string) {
        this.color = color || '';
        this.circumference = circumference || 0;
        this.material = material || '';
    }


    setColor(color: string) {
        this.color = color;
    }

    setCircumference(circumference: number) {
        this.circumference = circumference;
    }

    setMaterial(material: string) {
        this.material = material;
    }

    getColor() {
        return this.color;
    }

    getCircumference() {
        return this.circumference;
    }

    getMaterial() {
        return this.material;
    }
}

const ball = new Ball();


console.log('Informe a cor da bola: ');
const ballColor = scanf('%S');

console.log('Informe a circunferencia da bola: ');
const ballCircumference = scanf('%d');

console.log('Informe o material da bola:');
const ballMaterial = scanf('%S');


ball.setColor(ballColor);
ball.setCircumference(ballCircumference);
ball.setMaterial(ballMaterial);


console.log(`Cor da bola: ${ball.getColor()}
Circunferencia da bola: ${ball.getCircumference()}
Material da bola: ${ball.getMaterial()} `);