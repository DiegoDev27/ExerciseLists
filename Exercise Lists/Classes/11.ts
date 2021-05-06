// 11. Classe carro: Implemente uma classe chamada Carro com as seguintes propriedades:
// Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
// O consumo é especificado no construtor e o nível de combustível inicial é 0.
// Forneça um método andar( ) que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
// Forneça um método obterGasolina( ), que retorna o nível atual de combustível.
// Forneça um método adicionarGasolina( ), para abastecer o tanque. Exemplo de uso:
// meuFusca = Carro(15);           # 15 quilômetros por litro de combustível.
// meuFusca.adicionarGasolina(20); # abastece com 20 litros de combustível.
// meuFusca.andar(100);            # anda 100 quilômetros.
// meuFusca.obterGasolina()        # Imprime o combustível que resta no tanque.

import scanf from "scanf";

class Car {
    private consumptionKm: number;
    private fuelTank: number;

    constructor(consumptionKm: number) {
        this.consumptionKm = consumptionKm;
        this.fuelTank = 0;
    }


    walk(amountKms: number) {
        const littersConsumed = amountKms / this.consumptionKm;

        this.fuelTank -= littersConsumed;
    }

    addFuel(fuelTank: number) {
        this.fuelTank += fuelTank;
    }

    getFuelTank() {
        return this.fuelTank;
    }
}

const myCar = new Car(25);

while (true) {

    console.log('\n' + `Quantidade de Combustivel no tank: ${myCar.getFuelTank()} Litros
Digite 1 para andar com o carro, 2 para abastecer e 0 para encerrar:` + '\n');
    const option = scanf('%d');

    if (option === 0) {
        break;
    }

    if (option === 1) {
        console.log('Informe a quantidade de Kms que deseja andar com o carro:');
        const amount = scanf('%d');

        myCar.walk(amount);
    }

    if (option === 2) {
        console.log('Quantidade em litros que deseja abastecer?');
        const amount = scanf('%d');

        myCar.addFuel(amount);
    }
}