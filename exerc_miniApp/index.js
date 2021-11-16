let departureDateEntry = prompt("Digite a data de partida: \n(Formato: DD/MM/YYYY");
let departureDate = moment(departureDateEntry, "DD/MM/YYYY");
let today = moment();
let dateDifference = today - departureDate;

let chosen = prompt("Digite o numero da sua opção: \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias");

if (chosen == "1") {
    let seconds = Math.round((dateDifference / 1000));
    alert(seconds + " segundo(s)")
}
else if (chosen == "2") {
    let minutes = Math.round((dateDifference / 1000 / 60));
    alert(minutes + " minuto(s)")
}
else if (chosen == "3") {
    let hours = Math.round((dateDifference / 1000 / 3600));
    alert(hours + " hora(s)")
}
else if (chosen == "4") {
    let days = Math.round((dateDifference / 1000 / 3600 / 24));
    alert(days + " dia(s)")
}
else{
    alert("Opção inválida")
}