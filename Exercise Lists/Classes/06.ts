// 6. Classe TV: Faça um programa que simule um televisor criando-o como um objeto. O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume. Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.

import scanf from "scanf";

class Tv {

    private channel: number;
    private volume: number;

    constructor(channel?: number, volume?: number) {
        this.channel = channel || 1;
        this.volume = volume || 0;
    }

    changeChannel(channel: number) {
        this.channel = channel;
    }

    changeVolume(volume: number) {
        if (volume === 1) {
            this.volume++;
        } else if (volume === 0) {
            this.volume--;
        }
    }

    getChannel() {
        return this.channel;
    }

    getVolume() {
        return this.volume;
    }
}

const tv = new Tv();

while (true) {

    console.log('\n' + `Canal Atual: ${tv.getChannel()}
Volume Atual: ${tv.getVolume()}` + '\n');


    console.log(`O que deseja fazer?
    0 - Diminuir Volume (minimo 0)
    1 - Aumentar Volume (maximo 10)
    3 - Trocar Canal (Canais Disponiveis de 1 ate 50)
    4 - Desligar Tv`);
    const option = scanf('%d');

    if (option === 4) {
        break;
    }

    if (option <= 1) {

        if (tv.getVolume() <= 0 && option === 0) {

            console.log('\n' + 'Volume ja esta no minimo!');

        } else if (tv.getVolume() >= 10 && option === 1) {

            console.log('\n' + 'Volume ja esta no maximo!');

        } else {
            tv.changeVolume(option);
        }
    } else if (option === 3) {

        console.log('\n' + 'Qual canal deseja?');
        const channelNum = scanf('%d');

        if (channelNum > 50 || channelNum < 1) {

            console.log('\n' + 'Canal Inexistente!');
        } else {
            tv.changeChannel(channelNum);
        }
    }
}