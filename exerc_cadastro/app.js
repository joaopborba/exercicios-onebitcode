const firstName = prompt("Qual o primeiro nome do Recruta: ");
const lastName = prompt("Qual o sobrenome do recruta: ");
const fieldStudy = prompt("Qual o campo de estudo do recruta: ");
const yearBirth = prompt("Qual o ano de nascimento do recruta: ");

alert("\nNome completo do recruta: " + firstName + " " + lastName +
    "\nCampo de estudo: " + fieldStudy +
    "\nIdade: " + (2024 - yearBirth)
);
