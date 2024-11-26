function escalar(){
    const playersList = document.getElementById('playersList')

    const ul = document.createElement("ul");
    const newLi = document.createElement("li");
    
    let confirmacao = confirm("Deseja salvar os dados desse jogador? \n " +
        "Jogador: " + playerName.value + " - Posição: " + position.value + " - Número da camisa: " + playerNumber.value + "?"
    )
    
    if(confirmacao){
        newLi.innerText = "Jogador: " + playerName.value + " - Posição: " + position.value + " - Número da camisa: " + playerNumber.value;
        playerName.value = ""
        position.value = ""
        playerNumber.value = ""
    }

    ul.appendChild(newLi)
    playersList.appendChild(ul)

}