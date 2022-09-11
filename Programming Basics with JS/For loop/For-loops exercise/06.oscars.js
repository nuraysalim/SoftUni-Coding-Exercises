function oscars(input) {
    let index = 0;
    const nameOfActor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    const juryCount = Number(input[index]);
    index++;

    let isNominee = false

    for(let i = 0; i < juryCount; i++) {
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++; 
        points += name.length * tempPoints / 2;
        
        if (points > 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            isNominee = true;
            break;
        }
    }

    if (!isNominee) {
        const neededPoints = 1250.5 - points;
        console.log(`Sorry, ${nameOfActor} you need ${neededPoints.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

