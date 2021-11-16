let starshipName = prompt("Digite o nome da espaçonave: ");
let subsCaract = prompt("Qual caractere você quer substituir? ");
let newCaract = prompt("Qual caractere deseja incluir? ");
let newName = " ";

for (let i = 0; i < starshipName.length; i++) {
    if(starshipName[i] == subsCaract){
        newName += newCaract;
    }
    else{
        newName += starshipName[i];
    }
}

alert("O novo nome da nave é: " + newName);