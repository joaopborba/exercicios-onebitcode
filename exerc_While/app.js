let nextDrive = 0;
let cont = 0;

let starshipName = prompt("Digite o nome da sua nave: ");
let warpDrive = prompt("Deseja entrar na dobra espacial? \n1-Sim\n2-Não");

while(warpDrive == 1){
    warpDrive = prompt ("Deseja realizar a próxima dobra? \n1-Sim\n2-Não");
    cont++;
}

alert("Nome da nave: " + starshipName + "\n Número de dobras espaciais: " + cont);