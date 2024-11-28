function escalar(){
    const playerName = document.getElementById('playerName').value
    const playerNumber = document.getElementById('playerNumber').value
    const position = document.getElementById('position').value
    
    const confirmacao = confirm("Deseja salvar os dados desse jogador? \n " +
        "Jogador: " + playerName + " - Posição: " + position + " - Número da camisa: " + playerNumber + "?"
    )
    
    if(confirmacao){
        const playersList = document.getElementById('playersList')
        const newLi = document.createElement('li')
        newLi.id = 'player-' + playerNumber
        newLi.innerText = "Jogador: " + playerName + " - Posição: " + position + " - Número da camisa: " + playerNumber;
        playersList.appendChild(newLi)
        document.getElementById('playerName').value = ""
        document.getElementById('playerNumber').value = ""
        document.getElementById('position').value = ""
    }
    

}

function remover(){
    const playerNumber = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + playerNumber)

    const confirmacao = confirm("Deseja remover o jogador com o número: " + playerNumber + "?")

    if(confirmacao){
        document.getElementById('playersList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ""
    }

}