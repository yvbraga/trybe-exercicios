let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let saudacoes = "Bem vindo(a)";

// console.log(`${saudacoes} , ${info.personagem}`);

info.recorrente = "Sim";

for (let key in info) {
    // console.log(key)
}

for (let keys in info) {
//     console.log(info[keys])
}

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain ,Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};

for (let properties in info) {
    if (
        properties === "recorrente" && 
        info[properties] === "Sim" &&
        info2[properties] === "Sim"
    ) {
        console.log("Ambos recorrentes");
    }
    else {
        console.log(`${info[properties]} e ${info2[properties]}`)
    }
}
