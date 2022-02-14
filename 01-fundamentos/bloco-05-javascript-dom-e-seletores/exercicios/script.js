// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body 

let tituloPrincipal = document.createElement("h1");
tituloPrincipal.className = "titulo-principal";

let textoTitulo = document.createTextNode("Exercício 5.2 - JavaScript DOM");


let pegaBody = document.getElementsByTagName("body");