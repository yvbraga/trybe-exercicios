// let a = Math.floor(Math.random() * 100) + 1;
// let b = Math.floor(Math.random() * 100) + 1;

// console.log(`primeiro número: ${a}`);
// console.log(`segundo número: ${b}`);

// let soma = a + b;
// console.log(`${a} + ${b} é igual a : ${soma}`);

// let sub = a - b;
// console.log(`${a} - ${b} é igual a: ${sub}`);

// let mult = a * b;
// console.log(`${a} * ${b} é igual a : ${mult}`);

// let div = a / b;
// console.log(`${a} / ${b} é igual a : ${div.toFixed(2)}`);

// let mod = a % b;
// console.log(`o resto da divisão entre ${a} e ${b} é: ${mod}`);

// if (a > b) {
//     console.log(`${a} é o maior número`);
// }
// else if (b > b) {
//     console.log(`${b} é o maior número`);
// }
// else {
//     console.log(`os números são iguais`);
// }

// if (a > 0) {
//     console.log(`o número ${a} é um número positivo`);
// }
// else if (a < 0) {
//     console.log(`o número ${a} é um número negativo`);
// }
// else {
//     console.log(`o número ${a} é um número neutro`);
// }

// if (b > 0) {
//     console.log(`o número ${b} é um número positivo`);
// }
// else if (b < 0) {
//     console.log(`o número ${b} é um número negativo`);
// }
// else {
//     console.log(`o número ${b} é um número neutro`);
// }

let lado1 = Math.floor(Math.random() * 100) + 1;
let lado2 = Math.floor(Math.random() * 100) + 1;
let lado3 = Math.floor(Math.random() * 100) + 1;

console.log(`lado 1: ${lado1}, lado 2: ${lado2}, lado 3: ${lado3}`);

if (lado1 + lado2 + lado3 === 180) {
    console.log(`é um triângulo`);
} else {
    console.log(`não é um triângulo`);
}