let fila = [];
let opcao = " ";

do {
    let pacientes = " ";
    for(let i=0; i<fila.length; i++){
        pacientes += (i+1) + "º - " + fila[i] + "\n";
    }
    opcao = prompt("Lista de pacientes: \n" + pacientes + "\n\nEscolha a opção desejada:\n1- Novo paciente \n2- Consultar paciente \n3- Sair ");

    switch(opcao){
        case "1":
            const novoPaciente = prompt("Digite o nome do paciente: ");
            fila.push(novoPaciente);
        break
        case "2":
            fila.shift();
    }


} while (opcao !="3");