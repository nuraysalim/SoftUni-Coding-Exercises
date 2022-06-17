function theLift(input) {
    let peopleInQueue = input[0];
    let spotsInWagons = input[1].split(' ');
    let index = spotsInWagons.length
    
    for(let i = 0; i < index; i++) {
        let freeSpots = 4 - spotsInWagons[i];
        if(peopleInQueue > 4) {
            spotsInWagons[i] = 4;
            peopleInQueue -= freeSpots;
        } else {
            spotsInWagons[i] = peopleInQueue;
            peopleInQueue = 0;
        }
}

    for(let el of spotsInWagons) {
        if(el == 0 && peopleInQueue == 0) {
            console.log(`The lift has empty spots!
${spotsInWagons.join(' ')}`);
        } else if (peopleInQueue > 0 ){
            console.log(`There isn't enough space! ${peopleInQueue} people in a queue!
${spotsInWagons.join(' ')}`);
            break;
        }
    }
}
//theLift(["15", "0 0 0 0 0"])
theLift(["20", "0 2 0"])