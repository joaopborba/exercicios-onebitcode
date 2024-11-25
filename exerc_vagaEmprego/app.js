const vagas = [];


function listarVagas(){
    const vagaText = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nomeVaga
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    if(vagas == ""){
        alert("Sem vagas cadastradas")
    }else{
        alert(vagaText)
    }

}

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
    const indice = prompt("Qual indice da vaga que deseja visualizar: ")

    const listaCandidatos = vagas[indice].candidatos.reduce(function (textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert("Nome da vaga: " + vagas[indice].nomeVaga +
        "\nDescrição da vaga: " + vagas[indice].descVaga + 
        "\nData limite: " + vagas[indice].dataVaga + 
        "\nQuantidade de candidatos: " + vagas[indice].candidatos.length +
        "\nCandidatos inscritos: " + listaCandidatos
    )

}

function inscreverCandidato(){
    let nomeCandidato = prompt("Digite o nome do candidato: ")
    let indice = prompt("Digite o índice da vaga escolhida: ")

    let confirmacao = confirm("Deseja incluir o candidato " + nomeCandidato + " na vaga " + vagas[indice].nomeVaga + "?")

    if(confirmacao){
        vagas[indice].candidatos.push(nomeCandidato)
        alert("Candidato cadastro com sucesso")
    }
}

function excluirVaga(){
    let indice = prompt("Digite o índice da vaga a ser excluída: ")
    let confirmacao = confirm("Deseja excluir essa vaga: " +
        "Nome da vaga: " + vagas[indice].nomeVaga
    )

    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluída com sucesso")
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
                listarVagas();
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
                excluirVaga();
                break
            case "6":
                alert("Saindo.")
                break
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== "6")
}

menu();