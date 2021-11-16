let starshipName = prompt("Digite o nome da espaçonave: ");
let newName = " ";

for (i = starshipName.length - 1; i >= 0; i--) {
    if (starshipName[i] == "e") {
        break;
    } else {
        newName += starshipName[i];
    }
}

alert("Nome original da nave: " + starshipName + "\nNome após ocultação: " + newName);