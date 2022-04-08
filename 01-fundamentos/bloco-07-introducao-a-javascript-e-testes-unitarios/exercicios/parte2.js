// Crie uma função que receba um número e retorne seu fatorial. 

const factory = (number) => {
    let result;
    let firstMultiply = number - 1;
    for (let i = firstMultiply; i > 1; i -= 1) {
        result *= i;
    }
}

factory(4);
