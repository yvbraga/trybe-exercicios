function userInfo () {
    let userEmail = 'maria@gmail.com';
    // console.log(userEmail);
}
userInfo();

// function soma(num1, num2){
//     return num1 + num2
// }
// console.log(soma(2, 2));

// const soma = function (num1, num2) {
//     return num1 + num2
// }
// console.log(soma(5, 5));

// const soma = (num1, num2) => {
//     return num1 + num2
// }
// console.log(soma(1, 1));

const soma = (num1, num2) => num1 + num2;
// console.log(soma(2, 2));

const contaPalavras = (frase) => frase.split('').length;
// console.log(contaPalavras('hi there'));

// function objetoPessoa (nome, idade) {
//     return {
//         nome: nome,
//         idade: idade
//     }
// }
// console.log(objetoPessoa('yuri', 24));

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
// console.log(objetoPessoa('yuri', 24));


// OPERADOR TERNARIO

const trueExperession = (1 + 3 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExperession);

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression);

// const checkIfElse = (age) => {
//     if (age >= 18) {
//         return `Você tem idade para dirigir!`
//     } else {
//         return `Você ainda não tem idade para dirigir...`
//     }
// };
// console.log(checkIfElse(15));

// const checkTernary = (age) => (
//     age >= 18 ? `Você tem idade para dirigir!` : `Você não tem idade para dirigir...`
// );
// console.log(checkTernary(20));

const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
        return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
        return `Essa fruta é amarela`;
    } else {
        return `Não sei a cor`
    }
};
// console.log(checkIfElse('banana'));

