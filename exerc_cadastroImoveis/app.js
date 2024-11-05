let opcao = " ";
let imoveis = [];


do{
    opcao = prompt("Imóveis cadastrados: " + imoveis.length + "\n\nEscolha a opção desejada: \n1- Cadastrar imóvel \n2- Listas imóveis \n3- Sair");

    switch(opcao){
        case "1":
            let imovel = {}
            imovel.proprietario = prompt("Digite o nome do proprietário: ");
            imovel.quartos = prompt("Digite a quantidade de quartos: ")
            imovel.banheiros = prompt("Digite a quantidade de banheiros: ")
            imovel.garagem = prompt("Possui garagem? (Sim/não): ")

            let confirmacao = confirm("Deseja salvar o imóvel?\n" +
                "\nProprietário: " + imovel.proprietario + 
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.banheiros + 
                "\nGaragem? " + imovel.garagem
            )

            if(confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso")
            }else{
                alert("Voltando ao menu")
            }
        break

        case "2":
            for(let i=0; i<imoveis.length; i++){
                alert("Imóvel " + (i+1) +
                    "\nProprietário: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos + 
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem? " + imoveis[i].garagem
                )
            }
        break
    }




}while(opcao != "3");