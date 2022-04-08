function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno('mario', 23),
    novoAluno('jose', 30),
    novoAluno('igor', 20),
    novoAluno('luciana', 36)
];

function temMenosDe30 (aluno) {
    return aluno.idade < 30
}

function TemMaisDe30 (aluno) {
    return aluno.idade > 30
}

function filtro(callback) {
    let alunosFiltrados = [];
    for (let aluno of alunos) {
        if (callback(aluno)) {
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}
console.log(filtro(TemMaisDe30));