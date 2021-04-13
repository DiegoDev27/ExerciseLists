// 14. Leet spek generator. Leet é uma forma de se escrever o alfabeto latino usando outros símbolos em lugar das letras, como números por exemplo. A própria palavra leet admite muitas variações, como l33t ou 1337. O uso do leet reflete uma subcultura relacionada ao mundo dos jogos de computador e internet, sendo muito usada para confundir os iniciantes e afirmar-se como parte de um grupo. Pesquise sobre as principais formas de traduzir as letras. Depois, faça um programa que peça uma texto e transforme-o para a grafia leet speak.

import scanf from "scanf";

const dictionaryLeet = {
    ' ': ' ',
    a: '4',
    b: '8',
    c: 'C',
    d: 'D',
    e: '3',
    f: 'F',
    g: '6',
    h: '#',
    i: '!',
    j: 'J',
    k: 'K',
    l: '1',
    m: '/\\/\\',
    n: 'N',
    o: '0',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: '5',
    t: '7',
    u: 'U',
    v: '\\/',
    w: '\\/\\/',
    x: '><',
    y: 'Y',
    z: '2'
};

console.log('Informe o texto: ');
const txt = scanf('%S');

const result = convertText(txt, dictionaryLeet);

console.log(result);

function convertText(text: string, dic: any) {

    const vec = [];
    let txtConvert = '';

    for (let i = 0; i < text.length; i++) {
        vec.push(text[i]);
    }

    for (let j = 0; j < vec.length; j++) {
        txtConvert += dic[vec[j]];
    }

    return txtConvert;
}