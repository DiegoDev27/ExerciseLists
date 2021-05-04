// 10. Classe Bomba de Combustível: Faça um programa completo utilizando classes e métodos que:
// Possua uma classe chamada bombaCombustível, com no mínimo esses atributos:
// tipoCombustivel.
// valorLitro
// quantidadeCombustivel
// Possua no mínimo esses métodos:
// abastecerPorValor( ) – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
// abastecerPorLitro( ) – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
// alterarValor( ) – altera o valor do litro do combustível.
// alterarCombustivel( ) – altera o tipo do combustível.
// alterarQuantidadeCombustivel( ) – altera a quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba.

import scanf from "scanf";

class FuelPump {

    private fuelType: string;
    private litterValue: number;
    private amountFuel: number;
    private price: number;
    private amountLitter: number;

    constructor(fuelType: string, litterValue: number, amountFuel: number, price: number, amountLitter: number) {
        this.fuelType = fuelType;
        this.litterValue = litterValue;
        this.amountFuel = amountFuel;
        this.price = price;
        this.amountLitter = amountLitter;
    }

    supplyByValue(price: number) {
        this.amountLitter = price / this.litterValue;
    }

    supplyByLitter(amountLitter: number) {
        this.price = amountLitter * this.litterValue;
    }

    changeValue(litterValue: number) {
        this.litterValue = litterValue;
    }

    changeFuel(fuelType: string) {
        this.fuelType = fuelType;
    }

    changeAmountFuel() {
        this.amountFuel -= this.amountLitter;
    }

    getFuelType() {
        return this.fuelType;
    }

    getLitterValue() {
        return this.litterValue;
    }

    getAmountFuel() {
        return this.amountFuel;
    }

    getPrice() {
        return this.price;
    }

    getAmountLitter() {
        return this.amountLitter;
    }
}


const fuelpump = new FuelPump('Etanol', 3.50, 100, 0, 0);


while (true) {
    console.log('\n' + `Dados atuais da bomba de combustivel:
    Tipo de Combustivel: ${fuelpump.getFuelType()}
    Preço do Litro: R$${fuelpump.getLitterValue()}
    Quantidade de litros restantes na bomba: ${fuelpump.getAmountFuel()}` + '\n');

    console.log(`Digite um numero de acordo com o que deseja:
    1 - Alterar Combustivel
    2 - Alterar Preço do Litro
    3 - Abastecer
    0 - Encerrar Programa` + '\n');
    const option = scanf('%d');

    if (option === 0) {
        break;
    }

    if (option === 1) {
        console.log('Qual combustivel deseja?');
        const fuel = scanf('%s');

        fuelpump.changeFuel(fuel);
    }

    if (option === 2) {
        console.log('Qual preço deseja colocar no litro?');
        const priceLitter = scanf('%f');

        fuelpump.changeValue(priceLitter);
    }

    if (option === 3) {
        console.log('Digite 1 para abastecer por quantidade de dinheiro ou 2 para abastecer por quantidade de litros?');
        const answer = scanf('%d');

        if (answer === 1) {
            console.log('Quanto em dinheiro deseja abastecer?');
            const amount = scanf('%d');

            fuelpump.supplyByValue(amount);

            console.log(`Quantidade de litros abastecidos: ${fuelpump.getAmountLitter()}`);

            fuelpump.changeAmountFuel();

        } else if (answer === 2) {
            console.log('Quanto em litros deseja abastecer?');
            const amount = scanf('%d');

            fuelpump.supplyByLitter(amount);

            console.log(`Preço total do abastecimento: ${fuelpump.getPrice()} Reais`);

            fuelpump.changeAmountFuel();
        }
    }
}