const firstVehicle = prompt("Digite o nome do primeiro veículo: ");
const firstVelocity = parseFloat(prompt("Digite a velocidade do primeiro veículo: "));
const secondVehicle = prompt("Digite o nome do segundo veículo: ");
const secondVelocity = parseFloat(prompt("Digite a velocidade do segundo veículo: "));

if(firstVelocity > secondVelocity){
    alert("O " + firstVehicle + " é mais rápido do que o " + secondVehicle)
}else if(secondVehicle > firstVehicle){
    alert("O " + secondVehicle + " é mais rápido do que o " + firstVehicle);
}else if(firstVelocity == secondVelocity){
    alert("A velocidade do " + firstVehicle + " e " + secondVehicle + " são iguais.")
}
