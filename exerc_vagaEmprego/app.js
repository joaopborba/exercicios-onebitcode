const vagas = [];

function criarVaga() {
    let nomeVaga = prompt("Digite o nome da vaga: ");
    let descVaga = prompt("Digite a descrição da vaga: ")
    let dataVaga = prompt("Digite a data limite da vaga: ")

    let confirmacao = confirm("Deseja salvar essa vaga? " + 
        "\nNome da vaga: " + nomeVaga +
        "\nDescrição da vaga: " + descVaga +
        "\nData Limite: " + dataVaga
    )

    if(confirmacao){
        let vaga = { nomeVaga, descVaga, dataVaga, candidatos: [] };
        vagas.push(vaga)
        alert("Vaga criada")
    }
}

function visualizarVaga(){
    const indiceEscolhido = prompt("Qual indice da vaga que deseja visualizar: ")
    alert("Nome da vaga: " + vagas[indiceEscolhido].nomeVaga +
        "\nDescrição da vaga: " + vagas[indiceEscolhido].descVaga + 
        "\nData limite: " + vagas[indiceEscolhido].dataVaga + 
        "\nQuantidade de candidatos: " + vagas[indiceEscolhido].candidatos.length
    )

}

function inscreverCandidato(){
    let nomeCandidato = prompt("Digite o nome do candidato: ")
    let iVaga = prompt("Digite o índice da vaga escolhida: ")

    let confirmacao = confirm("Deseja incluir o candidato " + nomeCandidato + " na vaga " + vagas[iVaga].nomeVaga + "?")

    if(confirmacao){
        vagas[iVaga].candidatos.push(nomeCandidato)
        alert("Candidato cadastro com sucesso")
    }
}

function exibirMenu(){
    const opcao = prompt("Digite a opção desejada: \n1-Listar vagas disponíveis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever um candidato em uma vaga\n5-Excluir uma vaga\n6-Sair")
    return opcao
}

function menu() {

    do {
        opcao = exibirMenu();

        switch (opcao) {
            case "1":
                break
            case "2":
                criarVaga();
                break
            case "3":
                visualizarVaga();
                break
            case "4":
                inscreverCandidato();
                break
            case "5":
                break
            case "6":
                alert("Saindo.")
                break
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== "6")
}