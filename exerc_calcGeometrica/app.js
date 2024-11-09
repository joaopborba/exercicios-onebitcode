let opcao = ""

function menu(){
    do{
        opcao = prompt("Escolha a opção desejada: \n1- Área do triângulo\n2- Área do retângulo\n3- Área do quadrado\n4- Área do trapézio\n5- Área do círculo\n6- Sair")

        switch(opcao){
            case "1":
                calcTriangulo();
            break
            case "2":
                calcRetangulo();
            break
            case "3":
                calcQuadrado();
            break
            case "4":
                calcTrapezio();
            break
            case "5":
                calcCirculo();
            break
            case "6":
                alert("Saindo.")
            break
            default:
                alert("Opção inválida")
        }

    } while (opcao != "6")
}

menu();

function calcTriangulo(){
    let base = prompt("Digite a base do triângulo: ");
    let altura = prompt("Digite a altura do triângulo: ")

    alert("A área do triângulo é: " + (base * altura) / 2)
}

function calcRetangulo(){
    let base = prompt("Digite a base do triângulo: ");
    let altura = prompt("Digite a altura do triângulo: ")

    alert("A área do retângulo é: " + base * altura)
}

function calcQuadrado(){
    let lado = prompt("Digite o lado do quadrado: ");
    
    alert("A área do quadrado é: " + lado * lado)
}

function calcTrapezio(){
    let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
    let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "))
    let altura = prompt("Digite a altura do trapézio: ") 

    alert("A área do trapézio é: " + ((baseMaior + baseMenor) * altura) / 2)
}

function calcCirculo(){
    let raio = prompt("Digite o raio do círculo: ")

    alert("A área do círculo é: " + (3.14 * raio * raio))
}
