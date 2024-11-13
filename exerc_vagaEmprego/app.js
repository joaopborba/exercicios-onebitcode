menu();

function menu(){
    do{
        let opcao = prompt("Digite a opção desejada: \n1-Listar vagas disponíveis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever um candidato em uma vaga\n5-Excluir uma vaga\n6-Sair")

        switch(opcao){
            case "1":
            break
            case "2":
            break
            case "3":
            break
            case "4":
            break
            case "5":
            break
            case "6":
                alert("Saindo.")
            break
            default:
                alert("Opção inválida!");
        }
    }while(opcao != "6")
}