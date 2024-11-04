let pilha = [];
let opcao = "";

do{

    opcao = prompt("Monte de cartas: \n" + pilha.length + "\n" + "Digite a opção desejada: \n1- Adicionar uma carta\n2- Puxar uma carta\n3- Sair");

    switch(opcao){
        case "1":
            let novaCarta = prompt("Digite o nome da nova carta: ");
            pilha.push(novaCarta);
        break
        case "2":
            alert("Você puxou um(a): " + pilha.pop());
        break
    }




}while(opcao != "3");