// document.getElementById("page-title").innerText = "Aprendendo a usar o DOM";


// let allParagraphs = document.getElementsByTagName("p");

// for (i = 0; i < allParagraphs.length; i += 1) {
//     allParagraphs[i].style.color = "red";
// }

// allParagraphs[0].style.border = "1px solid black";

// document.getElementsByTagName("h4")[0].style.color = "green";

document.getElementById("header-container").style.backgroundColor = "green";
document.getElementById("header-container").style.textAlign = "center";
document.getElementById("header-container").style.fontFamily = "Arial";

document.querySelector(".emergency-tasks").style.backgroundColor = "pink";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";

let getH3BgPurple = document.querySelectorAll("h3");

for (index = 0; index <= 1; index += 1) {
    getH3BgPurple[index].style.backgroundColor = "purple";
    getH3BgPurple[index].style.textAlign = "center";
    getH3BgPurple[index].style.fontFamily = "Arial";
}

let getH3BgBlack = document.querySelectorAll("h3");

for (index = 2; index <= 4; index += 1) {
    getH3BgBlack[index].style.backgroundColor = "black";
    getH3BgBlack[index].style.textAlign = "center";
    getH3BgBlack[index].style.fontFamily = "Arial";
}
