let ingredientItems = [
    "500g de feijão cozido",
    "200g de toucinho",
    "1 concha de oleo",
    "1 cebola picada",
    "4 dentes de alho",
    "5 ovos",
    "1 colher de sopa de sal com alho",
    "cheiro verde a gosto",
    "200g de farinha de mandioca",
];

let ingredientList = document.querySelector(".ingredients-list");

for (let index = 0; index < ingredientItems.length; index += 1) {
    let ingredient = ingredientItems[index];

    let ingredientListItem = document.createElement("li");
    ingredientListItem.innerText = ingredient;
    ingredientListItem.className = "ingredients-list-item"

    ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll(".ingredients-list-item");

for (let index = 0; index < ingredientListItems.length; index += 1) {
    let element = ingredientListItems[index];

    if (element.innerText.includes("toucinho")) {
        ingredientList.removeChild();
    }
}
