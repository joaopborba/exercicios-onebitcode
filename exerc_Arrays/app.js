let hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let spaceship9Crew = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let platformLock = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false;
})

let spaceshipNamesUpper = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Nave(s) com mais de 9 tripulante(s): " + spaceship9Crew.join(", ");
message += "\nPrimeira plataforma com nave engatada: " + (platformLock + 1);
message += "\nNaves destacadas: " + spaceshipNamesUpper.join(", ");

alert(message)