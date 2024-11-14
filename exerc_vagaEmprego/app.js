const vagas = [];

function listarVaga() {
  return vagas;
}
function criarVaga() {
  const nomeVaga = prompt("Digite o nome da vaga: ");
  const descVaga = prompt("Digite uma descrição da vaga: ");
  const dataLimite = prompt("Digite uma data limite: ");
  const confirmacao = confirm(
    "Deseja salvar essa vaga? \nNome: " +
      nomeVaga +
      "\nDescrição: " +
      descVaga +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const vagaSalva = { nomeVaga, descVaga, dataLimite };
    vagas.push(vagaSalva);
    alert("Vaga salva com sucesso");
  } else {
    alert("Vaga não foi salva");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Digite a opção desejada: \n1-Listar vagas disponíveis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever um candidato em uma vaga\n5-Excluir uma vaga\n6-Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        alert(vagas);
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        alert("Saindo.");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== "6");
}

executar();
