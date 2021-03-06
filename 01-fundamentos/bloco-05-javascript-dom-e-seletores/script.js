/*
     Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
     - document.getElementById()
     - document.getElementsByClassName()
     - document.getElementsByTagName()
     1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
     2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
     3. Crie uma função que mude a cor do quadrado vermelho para branco.
     4. Crie uma função que corrija o texto da tag <h1>.
     5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
     6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText () {
    document.getElementsByTagName("p")[1].innerText = "Daqui a 2 anos me vejo mais feliz e mais conectado com as coisas que eu gosto."
}
changeText()

function changeColorOutside () {
    document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76, 164, 109)"
}
changeColorOutside()

function changeColorInside () {
    document.getElementsByClassName("center-content")[0].style.backgroundColor = "white"
}
changeColorInside()


function changeTitle () {
    document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript"
}
changeTitle()

function changeToUpperCase () {
    let tagP = document.getElementsByTagName("p");
    for (index = 0; index < tagP.length; index += 1) {
        tagP[index].style.textTransform = "uppercase"
    }
}
changeToUpperCase ()
