// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo
// como parâmetros o número apostado e uma função que checa se o
// número apostado é igual ao número sorteado. O retorno da sua HOF
// deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

const result = (bet) => {
    const chosenNumber = {
        bet: bet,
        luckyNumber:reward(1, 5) ,
    }
    let compare = bet !== chosenNumber.luckyNumber ? 'Tente novamente' : 'Parabéns você ganhou';
    return compare;
    
};


const reward = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(result(4));