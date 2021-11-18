let spaceshipName = prompt("Digite o nome da espaçonave: ");
let spaceshipVelocity = 0;
let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Escolha uma das opções: \n1- Acelerar a nave em 5km/s" +
            "\n2- Desacelerar em 5km/s" +
            "\n3- Imprimir dados de bordo" +
            "\n4- Sair do programa");
    }
    return option;
}

function accelerate(velocity) {
    newVelocity = velocity + 5;
    return newVelocity;
}

function desaccelerate(velocity) {
    newVelocity = velocity - 5;
    return newVelocity;
}

function shipData(name, velocity) {
    alert("Nome da nave: " + name + "\nVelocidade atual: " + velocity);
}

while(chosenOption != "4"){
    chosenOption = showMenu();

    switch(chosenOption){
        case "1":
            spaceshipVelocity = accelerate(spaceshipVelocity);
            break
        case "2":
            spaceshipVelocity = desaccelerate(spaceshipVelocity);
            break
        case "3":
            shipData(spaceshipName, spaceshipVelocity);
            break
        case "4":
            alert("Saindo do programa");
            break
        default:
            alert("Opção inválida");
    }
}