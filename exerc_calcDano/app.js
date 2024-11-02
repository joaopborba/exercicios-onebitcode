const name1 = prompt("Digite o nome do primeiro personagem: ");
const atk = parseFloat(prompt("Digite o poder de ataque do " + name1));
const name2 = prompt("Digite o nome do segundo personagem: ");
let hpoints = parseFloat(prompt("Digite os pontos de vida do " + name2));
const def = parseFloat(prompt("Digite o poder de defesa do " + name2));
const shield = prompt("O " + name2 + " tem escudo? (sim/nao)");

if(atk > def && shield == 'nao'){
    alert("O dano causado foi: " + (atk - def));
    alert ("Status final: \n\n" + 
        name1 + "\nPoder de ataque: " + atk + "\nDano causado: " + (atk - def) + 
        "\n\n" + name2 + "\nPontos de vida atualizado: " + (hpoints - (atk - def)) + "\nPontos de defesa: " + def + "\nPossui escudo: " + shield
    )
}else if(atk > def && shield == 'sim'){
    alert("O dano causado foi: " + ((atk - def)/2));
    alert ("Status final: \n\n" + 
        name1 + "\nPoder de ataque: " + atk + "\nDano causado: " + ((atk - def)/2) + 
        "\n\n" + name2 + "\nPontos de vida atualizado: " + (hpoints - (atk - def)/2) + "\nPontos de defesa: " + def + "\nPossui escudo: " + shield
    )
}
else{
    alert("O dano causado foi 0");
}
