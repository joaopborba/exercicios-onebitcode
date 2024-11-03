let escolha = '';

do {
    escolha = prompt("Escolha uma das opções: 1-opcao 1\n2-opcao 2\n3-opcao 3\n4-opcao 4\n5- Encerrar\n");
    switch (escolha) {
        case "1":
            alert("Opção 1 escolhida");
            break
        case "2":
            alert('Opção 2 escolhida');
            break
        case "3":
            alert("Opção 3 escolhida");
            break
        case "4":
            alert("Opção 4 escolhida");
            break
        case "5":
            alert("Encerrando...");
            break
        default:
            alert("Opção incorreta!");
    }
} while (escolha !== "5")