let ly = prompt("Qual é a distância em anos-luz? ");
let listOptions = prompt("Escolha a opção de conversão: \n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)");
let result = 0;
let convOption = 0;

switch (listOptions) {
    case "1":
        result = ly * 0.306601;
        convOption = "Parsec"
        break
    case "2":
        result = ly * 63241.1;
        convOption = "Unidade Astronômica"
        break
    case "3":
        result = ly * 9.5 * Math.pow(10, 12);
        convOption = "Quilômetros"
        break
    default:
        alert("Unidade não identificada: Conversão fora do escopo");
}

alert("Distância em Anos-luz: " + ly + "\n" + convOption + ": " + result);