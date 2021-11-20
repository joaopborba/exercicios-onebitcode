function slowDown (velocity, printer){
    let decrementVel = 20;

    while(velocity > 0){
        printer(velocity)
        velocity -= decrementVel;
    }
    alert("Nave parada.")
}

let spaceshipVel = 150;

slowDown(spaceshipVel, (velocity) => {
    console.log("Velocidade: " + velocity);
})