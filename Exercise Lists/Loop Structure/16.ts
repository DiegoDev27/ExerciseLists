// 16. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.

let last: number = 1;
let penult: number = 0;
let counter: number = 3;
let term: number = 0;

console.log(term);
console.log(last);

while (counter <= 500 && last <= 500) {
    term = last + penult;
    penult = last;
    last = term;
    counter++;
    console.log(term);
}