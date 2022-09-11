function tennisRanklist(input) {
    let index = 0;
    const numOfTournaments = Number(input[index]);
    index++;
    const startPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let winCounter = 0;

    for(let i = 0; i < numOfTournaments; i++) {
        let score = input[index];
        index++;
        
        switch(score) {
            case "W": tempPoints += 2000;
                winCounter++;
            break;
            case "F": tempPoints += 1200;
            break;
            case "SF": tempPoints += 720;
            break;
        }
    
    }

    let finalPoints = tempPoints + startPoints;
    let avgPoints = tempPoints / numOfTournaments;
    let wonTournamentsPer = winCounter / numOfTournaments * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`)
    console.log(`${wonTournamentsPer.toFixed(2)}%`)

}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

